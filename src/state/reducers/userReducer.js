const initState = {
  user: {},
}

export const userReducer = (state = initState, action) => {
  let newUser

  switch (action.type) {
    case 'UPDATE_USER':
      newUser = action.payload
      return { userDetails: newUser }

    default:
      return state
  }
}
