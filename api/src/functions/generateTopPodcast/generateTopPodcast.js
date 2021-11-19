import { logger } from 'src/lib/logger'

// importing `db` directly
import { db } from 'src/lib/db'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event, context) => {
  logger.info('Invoked generateTopPodcast function')

  const podcasts = await db.$queryRaw`
    SELECT name, publisher, description, genres, image_url, popularity, rownum FROM (
      SELECT *, row_number() OVER (PARTITION BY genres ORDER BY popularity DESC) AS rownum
      FROM (
        SELECT name, publisher, description, image_url, popularity, genres
          FROM  (
            SELECT name, publisher, description, image_url, popularity
                  , unnest(genres) AS genres
            FROM "public"."Podcast"
            ) sub
          WHERE  genres <> ''
          ORDER  BY name,  genres
      ) p
    ) a
    where rownum <= 5;
  `

  await db.topPodcast.deleteMany()
  await db.topPodcast.createMany({
    data: podcasts,
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      data: podcasts,
    }),
  }
}
