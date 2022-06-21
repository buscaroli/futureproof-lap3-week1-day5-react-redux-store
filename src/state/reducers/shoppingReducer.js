const initState = {
  shoppingCart: [],
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
