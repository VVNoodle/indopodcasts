import { render } from '@redwoodjs/testing/web'

import SearchIcon from './SearchIcon'

describe('SearchIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchIcon />)
    }).not.toThrow()
  })
})
