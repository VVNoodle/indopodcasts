import { render } from '@redwoodjs/testing/web'

import Sort from './Sort'

describe('Sort', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sort />)
    }).not.toThrow()
  })
})
