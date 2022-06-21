export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD',
      payload: item,
    })
  }
}

export const removeItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE',
      payload: item,
    })
  }
}

export const updateUserDetails = (user) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: user,
    })
  }
}
