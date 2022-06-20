import { render, screen } from '@testing-library/react'
import Footer from './'

let footer

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
    footer = screen.getByTestId('footer')
  })

  it('tests the footer exists', () => {
    expect(footer).toBeTruthy()
  })

  it('tests the footer contains the right text', () => {
    expect(footer.textContent).toBe('Thanks for checking out this App!')
  })

  it('tests the footer has a class of "wrapper"', () => {
    expect(footer.classList.contains('wrapper')).toBeTruthy()
  })
})
