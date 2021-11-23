import PodcastCard from '../PodcastCard/PodcastCard'

export const QUERY = gql`
  query TopPodcastsQuery {
    topPodcasts {
      id
      name
      publisher
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
        list.push(<PodcastCard key={podcast.id} product={podcast} />)
      } else {
        genreBefore = podcast.genres[0]
        group.push(
          <li key={`f${podcast.id}`} className="flex gap-6">
            {list}
          </li>
        )
        list = []
        group.push(
          <li
            key={`${genreBefore}${podcast.id}`}
            className="col-span-full mt-6 mb-4"
          >
            <h2 className="font-light text-gray-800 text-lg">
              Podcast Populer dalam {genreBefore}
            </h2>
          </li>
        )
        list.push(<PodcastCard key={podcast.id} product={podcast} />)
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
