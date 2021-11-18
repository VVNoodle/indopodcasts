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

  const foo = () => {
    const abc = []
    topPodcasts.forEach((podcast) => {
      if (podcast.genres[0] === genreBefore) {
        abc.push(<PodcastCard key={podcast.id} product={podcast} />)
      } else {
        genreBefore = podcast.genres[0]
        abc.push(
          <li className="col-span-full">
            <h2 className="font-bold">Podcast Populer dalam {genreBefore}</h2>
          </li>
        )
        abc.push(
          <li>
            <PodcastCard key={podcast.id} product={podcast} />
          </li>
        )
      }
    })

    return abc
  }
  return <ul className="grid sm:grid-cols-4 md:grid-cols-6">{foo()}</ul>
}
