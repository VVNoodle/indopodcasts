import PodcastCard from '../PodcastCard/PodcastCard'

export const QUERY = gql`
  query PodcastsQuery {
    podcasts {
      id
      name
      genres
      description
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ podcasts }) => {
  return (
    <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
      {podcasts.map((podcast) => {
        return (
          <li key={podcast.id}>
            <PodcastCard product={podcast} />
          </li>
        )
      })}
    </ul>
  )
}
