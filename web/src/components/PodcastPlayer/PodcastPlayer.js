import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

// const { PlayIconSVG, PauseIconSVG, NextIconSVG, PrevIconSVG } = Icons

const PodcastPlayer = ({ trackTitle, trackArtist, streamUrl, image }) => {
  const audioList1 = [
    {
      name: trackTitle,
      singer: trackArtist,
      cover: image,
      musicSrc: streamUrl,
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
    },
  ]
  return <ReactJkMusicPlayer mode="full" theme="auto" audioLists={audioList1} />
}
export default PodcastPlayer
