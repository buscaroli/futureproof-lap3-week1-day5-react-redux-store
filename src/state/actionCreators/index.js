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
