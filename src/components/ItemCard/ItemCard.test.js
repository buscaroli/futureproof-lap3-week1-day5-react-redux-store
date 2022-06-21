import { render, screen } from '@testing-library/react'
import ItemCard from './'
import { Provider } from 'react-redux'

describe('Title', () => {
  beforeEach(() => {
    render(
      <Provider>
        <ItemCard
          id="1"
          title="test title"
          description="test description"
          image="./ItemCardTestPic.jpeg"
        />
      </Provider>
    )
  })

  it.only('tests the card exists', () => {
    const card = screen.getByRole('comment')
    expect(card).toBeTruthy()
  })

  it('tests the is a title', () => {
    const title = screen.getByRole('comment')
    expect(title.textContent).toBe('Redux Store')
  })

  it('tests the title has the right text ', () => {
    const card = screen.getByTestId('cardTitle')
    expect(card.textContent).toBe('test title')
  })
})
