import { db } from 'src/lib/db'

export const podcasts = () => {
  return db.podcast.findMany()
}
