import { useState, useEffect } from 'react'

import ReactJkMusicPlayer from 'react-jinke-music-player'

import 'react-jinke-music-player/lib/styles/index.less'

const PodcastPlayer = ({ episode }) => {
  const [audio, setAudio] = useState([])

  useEffect(() => {
    setAudio([
      {
        name: episode.title,
        singer: episode.artistName,
        cover: episode.itunes_image.href,
        musicSrc: episode.enclosures ? episode.enclosures[0].url : '',
      },
    ])
  }, [episode])

  return <ReactJkMusicPlayer mode="full" theme="dark" audioLists={audio} />
}
export default PodcastPlayer
