import { db } from 'src/lib/db'

export const topPodcasts = ({ first, after }) => {
  let prismaQuery = {
    take: first,
  }

  if (after) {
    prismaQuery = {
      ...prismaQuery,
      skip: 1,
      cursor: {
        id: after,
      },
    }
  }

  return db.topPodcast.findMany(prismaQuery)
}
