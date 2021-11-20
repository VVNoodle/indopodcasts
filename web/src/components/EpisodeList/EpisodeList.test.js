import { render } from '@redwoodjs/testing/web'

import EpisodeList from './EpisodeList'

describe('EpisodeList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EpisodeList />)
    }).not.toThrow()
  })
})
