/**
 * @jest-environment jsdom
 */
jest.mock('./Loader.module.scss')

import React from 'react'
// import { render, unmountComponentAtNode } from 'react-dom'
import { render } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'

import Loader from './index'

// let container = null
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div')
//   document.body.appendChild(container)
// })

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container)
//   container.remove()
//   container = null
// })

describe('#Loader', () => {
  it('Should render with svg', () => {
    const { getByTestId } = render(<Loader />)
    const element = getByTestId('loader-circle')
    expect(element).toBeInTheDocument()
  })
})

// const renderComponent = (props = {}) => render(<Loader {...props} />)

// describe('<Loader />', () => {
//   it('should render an <a> tag if no route is specified', () => {
//     const { container } = renderComponent()
//     // expect(container.querySelector('svg')).not.toBeNull()
//     expect(container.querySelector('svg')).toBeInTheDocument()
//   })

//   it('Should render with svg', () => {
//     const { getByTestId } = render(<Loader />)
//     const element = getByTestId('loader-circle')
//     expect(element).toBeInTheDocument()
//   })
// })
