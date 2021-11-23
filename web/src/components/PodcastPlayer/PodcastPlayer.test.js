import { render } from '@redwoodjs/testing/web'

import PodcastPlayer from './PodcastPlayer'

describe('PodcastPlayer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PodcastPlayer />)
    }).not.toThrow()
  })
})
