import { render } from '@redwoodjs/testing/web'

import ProductItem from './ProductItem'

describe('ProductItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductItem />)
    }).not.toThrow()
  })
})
