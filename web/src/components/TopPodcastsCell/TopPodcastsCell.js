import PodcastCard from '../PodcastCard/PodcastCard'

export const QUERY = gql`
  query TopPodcastsQuery {
    topPodcasts {
      id
      name
      genres
      description
      image_url
      popularity
      rownum
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ topPodcasts }) => {
  let genreBefore = null

  const content = () => {
    const group = []
    let list = []
    topPodcasts.forEach((podcast) => {
      if (podcast.genres[0] === genreBefore) {
        list.push(
          <div key={podcast.id}>
            <PodcastCard product={podcast} />
          </div>
        )
      } else {
        genreBefore = podcast.genres[0]
        group.push(
          <li key={`f${podcast.id}`} className="flex">
            {list}
          </li>
        )
        list = []
        group.push(
          <li className="col-span-full mt-6">
            <h2 className="font-bold text-gray-700 text-lg">
              Podcast Populer dalam {genreBefore}
            </h2>
          </li>
        )
        list.push(
          <div key={podcast.id}>
            <PodcastCard product={podcast} />
          </div>
        )
      }
    })
    group.push(
      <li key={`last`} className="flex">
        {list}
      </li>
    )

    return group
  }
  return <ul className="flex flex-col">{content()}</ul>
}
