export const schema = gql`
  type TopPodcast {
    id: Int!
    name: String!
    description: String!
    genres: [String]!
    image_url: String!
    popularity: Int!
    rownum: Int!
  }

  type Query {
    topPodcasts: [TopPodcast!]! @requireAuth
  }

  input CreateTopPodcastInput {
    name: String!
    description: String!
    genres: [String]!
    image_url: String!
    popularity: Int!
    rownum: Int!
  }

  input UpdateTopPodcastInput {
    name: String
    description: String
    genres: [String]!
    image_url: String
    popularity: Int
    rownum: Int!
  }
`
