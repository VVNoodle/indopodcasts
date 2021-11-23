import { render } from '@redwoodjs/testing/web'

import ClearIcon from './ClearIcon'

describe('ClearIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClearIcon />)
    }).not.toThrow()
  })
})
