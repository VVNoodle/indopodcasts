import { useState, useEffect, Fragment } from 'react'

const { parse } = require('rss-to-json')

export default function EpisodeList({ rss, pickEpisode }) {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    async function getEpisodes() {
      const podcastRssMetadata = await parse(rss)
      setEpisodes(podcastRssMetadata.items)
    }
    getEpisodes()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="flow-root mt-2\\ w-4/5">
        <h1 className="text-xl">Episodes</h1>
        <ul className="mt-2 -my-5 divide-y divide-gray-200">
          {episodes.map((episode) => (
            <li key={episode.link} className="py-5 grid grid-cols-episode">
              <div className="mr-2 col-start-1">
                <img className="w-20" src={episode.itunes_image.href} alt="" />
              </div>

              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500  col-start-2">
                <button
                  onClick={() => {
                    pickEpisode(episode)
                  }}
                >
                  <h3 className="text-sm font-semibold text-gray-800">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {episode.title}
                  </h3>
                </button>
                <div className="mt-1 text-sm text-gray-600 line-clamp-2">
                  <div
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
