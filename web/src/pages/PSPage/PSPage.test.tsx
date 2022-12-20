import { render } from '@redwoodjs/testing/web'

import PsPage from './PsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PsPage />)
    }).not.toThrow()
  })
})
