const initState = {
  shoppingCart: [
    {
      id: 1,
      title: 'Example Title of this Item in here',
      price: '100',
      description: 'Example description of this item in here',
      category: 'jewelery',
    },
    {
      id: 2,
      title: 'Second Example Title of an Item in here',
      price: '150',
      description: 'Another Example description of an item in here',
      category: 'electronics',
    },
  ],
}

export const shoppingReducer = (state = initState, action) => {
  let updatedCart

  switch (action.type) {
    case 'ADD':
      updatedCart = [...state.shoppingCart, action.payload]
      console.log()
      console.log(updatedCart)
      return { shoppingCart: updatedCart }
    case 'REMOVE':
      updatedCart = state.filter((item) => item.id !== action.payload.id)
      return { shoppingCart: updatedCart }

    default:
      return state
  }
}
