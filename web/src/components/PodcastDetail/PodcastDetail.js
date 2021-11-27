/* This example requires Tailwind CSS v2.0+ */
import EpisodeList from '../EpisodeList/EpisodeList'

export default function PodcastDetail({ podcast, pickEpisode }) {
  return (
    <>
      <div className="border-b border-gray-200 pt-24 pb-10 ">
        <div className="flex justify-between relative">
          <div className="w-auto mr-5">
            <img
              className=" w-64 flex-shrink-0 rounded-md"
              src={podcast.image_url}
              alt=""
            />
          </div>
          <div className="w-full mt-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              {podcast.name}
            </h1>
            <p className="mt-4 text-base text-gray-500">
              {podcast.description}
            </p>
            <p className="mt-4 text-base text-gray-500">{podcast.rss}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <EpisodeList rss={podcast.rss} pickEpisode={pickEpisode}></EpisodeList>
      </div>
    </>
  )
}
