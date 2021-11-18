import { db } from 'src/lib/db'

export const topPodcasts = () => {
  return db.topPodcast.findMany()
}
