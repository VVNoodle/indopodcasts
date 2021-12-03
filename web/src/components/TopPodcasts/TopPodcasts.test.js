import { render } from '@redwoodjs/testing/web'

import TopPodcasts from './TopPodcasts'

describe('TopPodcasts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopPodcasts />)
    }).not.toThrow()
  })
})
