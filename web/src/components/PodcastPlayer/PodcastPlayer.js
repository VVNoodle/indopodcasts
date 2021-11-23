import React from 'react'
import {
  PlayButton,
  Progress,
  Timer,
  Icons,
} from 'react-soundplayer/components'

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons'

// const { PlayIconSVG, PauseIconSVG, NextIconSVG, PrevIconSVG } = Icons

const PodcastPlayer = withCustomAudio((props) => {
  const { trackTitle, currentTime, duration } = props
  console.log(currentTime)
  return (
    <div className="flex bg-green-200 fixed bottom-0 w-full">
      <PlayButton {...props} className=" w-20" />
      <Progress
        className="w-full z-10"
        value={(currentTime / duration) * 100 || 0}
        {...props}
      />
      <h2 className="text-xs">{trackTitle}</h2>
      <Timer {...props} className="text-xs" />
    </div>
  )
})

export default PodcastPlayer
