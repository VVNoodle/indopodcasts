import { render } from '@redwoodjs/testing/web'

import PodcastCard from './PodcastCard'

describe('PodcastCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PodcastCard />)
    }).not.toThrow()
  })
})
