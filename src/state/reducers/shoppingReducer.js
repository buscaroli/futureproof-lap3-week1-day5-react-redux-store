const initState = {
  shoppingCart: [
    {
      id: 1,
      title: 'title',
      price: '100',
      description: 'description',
      category: 'jewelery',
    },
  ],
}

export const shoppingReducer = (state = initState, action) => {
  let updatedCart
  switch (action.type) {
    case 'ADD':
      updatedCart = state.shoppingCart.push(action.payload)
      return { shoppingCart: updatedCart }
    case 'REMOVE':
      updatedCart = state.filter((item) => item.id !== action.payload.id)
      return { shoppingCart: updatedCart }

    default:
      return state
  }
}
