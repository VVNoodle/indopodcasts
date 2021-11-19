import { Link, routes } from '@redwoodjs/router'

import { MetaTags } from '@redwoodjs/web'

import PodcastDetailCell from 'src/components/PodcastDetailCell'

const PodcastDetailPage = ({ name }) => {
  return (
    <>
      <MetaTags
        title="Podcast Detail"
        // description="PodcastDetail description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <PodcastDetailCell name={name}></PodcastDetailCell>
    </>
  )
}

export default PodcastDetailPage
