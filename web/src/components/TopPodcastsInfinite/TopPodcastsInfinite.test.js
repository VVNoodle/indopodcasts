import { render } from '@redwoodjs/testing/web'

import TopPodcastsInfinite from './TopPodcastsInfinite'

describe('TopPodcastsInfinite', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopPodcastsInfinite />)
    }).not.toThrow()
  })
})
