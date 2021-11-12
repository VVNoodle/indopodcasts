import { render } from '@redwoodjs/testing/web'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchBar />)
    }).not.toThrow()
  })
})
