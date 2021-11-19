import { render } from '@redwoodjs/testing/web'

import PodcastDetail from './PodcastDetail'

describe('PodcastDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PodcastDetail />)
    }).not.toThrow()
  })
})
