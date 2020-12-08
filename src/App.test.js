import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders learn react link', () => {
    const { getByTestId } = render(<App />)
    // const element = getByText(/addcircle/i)
    const element = getByTestId('loader-circle')
    expect(element).toBeInTheDocument()
  })
})
