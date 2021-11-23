import { render } from '@redwoodjs/testing/web'

import Autocomplete from './Autocomplete'

describe('Autocomplete', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Autocomplete />)
    }).not.toThrow()
  })
})
