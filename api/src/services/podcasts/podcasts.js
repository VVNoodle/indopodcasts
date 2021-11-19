import { db } from 'src/lib/db'

export const podcasts = () => {
  return db.podcast.findMany()
}
export const podcast = ({ name }) => {
  return db.podcast.findFirst({
    where: {
      name: {
        equals: decodeURIComponent(name),
      },
    },
  })
}
