import { db } from '$api/src/lib/db'
import csv from 'csvtojson'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const jsonObj = await csv().fromFile(
      '/Users/eganbisma/projects/indopodcasts/indopodcasts100.csv'
    )
    const jsonObj1 = await csv().fromFile(
      '/Users/eganbisma/projects/indopodcasts/indopocasts_popular.csv'
    )
    const data = [...jsonObj, ...jsonObj1].map((podcast) => ({
      name: podcast.title,
      description: podcast.description,
      image_url: podcast.artwork_image,
      genres: podcast.genres.split(','),
    }))

    console.log(
      "\nUsing the default './scripts/seed.js' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (userExample) => {
        const record = await db.podcast.create({
          data: { ...userExample },
        })

        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
