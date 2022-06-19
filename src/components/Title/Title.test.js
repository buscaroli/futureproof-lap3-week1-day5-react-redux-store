import { render, screen } from '@testing-library/react'
import Title from './'

let title

describe('Title', () => {
  beforeEach(() => {
    render(<Title title="Redux Store" />)
    title = screen.getByRole('heading', { level: 1 })
  })

  it('tests the title exists', () => {
    expect(title).toBeTruthy()
  })

  it('tests the title has the correct value', () => {
    expect(title.textContent).toBe('Redux Store')
  })

  it('tests the title has a class of "wrapper" ', () => {
    expect(title.classList.contains('wrapper')).toBeTruthy()
  })
})
