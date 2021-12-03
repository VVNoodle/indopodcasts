import { useEffect } from 'react'

const TopPodcasts = ({ content, setCursors }) => {
  useEffect(() => {
    setCursors()
  })
  return <ul className="flex flex-col">{content()}</ul>
}

export default TopPodcasts
