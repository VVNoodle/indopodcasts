import { render } from '@redwoodjs/testing/web'

import GlobalLayout from './GlobalLayout'

describe('GlobalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GlobalLayout />)
    }).not.toThrow()
  })
})
