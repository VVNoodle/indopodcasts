import TopPodcastsCell from 'src/components/TopPodcastsCell'

import { useState, useEffect } from 'react'

export const TopPodcastsInfinite = ({ limit, isBottom, setIsBottom }) => {
  const [cursors, setCursors] = useState({})
  const [lists, setLists] = useState([])

  useEffect(() => {
    if (isBottom) {
      setLists((currLists) => {
        console.log('curlist', [...currLists, cursors.id])
        return [...currLists, cursors.id]
      })
      setIsBottom(false)
    }
  }, [isBottom, cursors, setIsBottom])

  return (
    <>
      <TopPodcastsCell first={limit} setCursors={setCursors} />
      {lists.map((cursorId) => (
        <TopPodcastsCell
          key={cursorId}
          first={limit}
          after={cursorId}
          setCursors={setCursors}
        />
      ))}
    </>
  )
}
