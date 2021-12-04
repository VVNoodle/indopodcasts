import { useContext } from 'react'
import { MetaTags } from '@redwoodjs/web'

import PodcastDetailCell from 'src/components/PodcastDetailCell'
import { EpisodeContext } from 'src/layouts/GlobalLayout/GlobalLayout'

const PodcastDetailPage = (props) => {
  const pickEpisode = useContext(EpisodeContext)
  return (
    <>
      <MetaTags
        title={decodeURIComponent(props.name)}
        // description="PodcastDetail description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <PodcastDetailCell
        name={props.name}
        // episode={episode}
        pickEpisode={pickEpisode}
      ></PodcastDetailCell>
    </>
  )
}

export default PodcastDetailPage
