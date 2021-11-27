import { PlayButton, Progress } from 'react-soundplayer/components'

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons'

// const { PlayIconSVG, PauseIconSVG, NextIconSVG, PrevIconSVG } = Icons

const PodcastPlayer = withCustomAudio((props) => {
  const { trackTitle, currentTime, duration, image } = props
  return (
    <div className="flex border-t-2 bg-gray-100 border-gray-200 fixed bottom-0 w-full">
      <div className="flex w-full mr-4 items-center gap-4 p-4 shadow-sm">
        <img className="w-20" src={image} key={image} alt="" />
        <h2 className="text-xs space-x-2 w-40">{trackTitle}</h2>
        <PlayButton {...props} className="w-10" />
        <p className="text-gray-600">{prettyTime(currentTime)}</p>
        <Progress value={(currentTime / duration) * 100 || 0} {...props} />
        <p className="text-gray-600">{prettyTime(duration)}</p>
      </div>
    </div>
  )
})

function prettyTime(time) {
  let hours = Math.floor(time / 3600)
  let mins = '0' + Math.floor((time % 3600) / 60)
  let secs = '0' + Math.floor(time % 60)

  mins = mins.substr(mins.length - 2)
  secs = secs.substr(secs.length - 2)

  if (!isNaN(secs)) {
    if (hours) {
      return `${hours}:${mins}:${secs}`
    }
    return `${mins}:${secs}`
  }
  return '00:00'
}

export default PodcastPlayer
