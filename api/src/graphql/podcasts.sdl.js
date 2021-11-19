export const schema = gql`
  type Podcast {
    id: Int!
    name: String!
    description: String!
    genres: [String]!
    image_url: String!
  }

  type Query {
    podcasts: [Podcast!]! @requireAuth
    podcast(name: String!): Podcast @requireAuth
  }

  input CreatePodcastInput {
    name: String!
    description: String!
    genres: [String]!
    image_url: String!
  }

  input UpdatePodcastInput {
    name: String
    description: String
    genres: [String]!
    image_url: String
  }
`
