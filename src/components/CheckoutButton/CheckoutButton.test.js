import { screen } from '@testing-library/react'

import CheckoutButton from './'

let btn

describe('CheckoutButton', () => {
  beforeEach(() => {
    render(<CheckoutButton text="Bag" />)
    btn = screen.getByRole('button')
  })

  it('tests the button exists', () => {
    expect(btn).toBeTruthy()
  })

  it('tests the button has the right text', () => {
    expect(btn.textContent).toBe('Bag')
  })

  it('tests the button has a class of "wrapper" ', () => {
    expect(btn.classList.contains('wrapper')).toBeTruthy()
  })
})
