/* eslint-disable no-undef */
import { db } from '$api/src/lib/db'
import csv from 'csvtojson'

const dumpGenres = {
  'Alternative Health': 'Health and Fitness',
  'Business News': 'Business',
  'Comedy Interviews': 'Comedy',
  'Higher Education': 'Education',
  'Language Learning': 'Education',
  Spirituality: 'Religion & Spirituality',
  Religion: 'Religion & Spirituality',
  'Tech News': 'News',
  'Daily News': 'News',
  Football: 'News',
  Basketball: 'Sports',
}

const filterGenres = (genres) => {
  const finalGenres = new Set()
  for (let index = 0; index < genres.length; index++) {
    const currentGenre = genres[index].trim()
    if (Object.prototype.hasOwnProperty.call(dumpGenres, currentGenre)) {
      console.log('ish', currentGenre)
      finalGenres.add(dumpGenres[currentGenre])
    } else {
      finalGenres.add(currentGenre)
    }
  }

  return Array.from(finalGenres)
}

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
    const data = [...jsonObj, ...jsonObj1].map((podcast) => {
      return {
        name: podcast.title,
        description: podcast.description,
        image_url: podcast.artwork_image,
        genres: filterGenres(podcast.genres.split(',')),
        popularity: podcast.listen_score ? parseInt(podcast.listen_score) : 0,
      }
    })

    console.log(
      "\nUsing the default './scripts/seed.js' template\nEdit the file to add seed data\n"
    )

    await db.topPodcast.deleteMany()
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
