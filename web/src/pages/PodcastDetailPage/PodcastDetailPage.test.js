import { render } from '@redwoodjs/testing/web'

import PodcastDetailPage from './PodcastDetailPage'

describe('PodcastDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PodcastDetailPage />)
    }).not.toThrow()
  })
})
