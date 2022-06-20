const reducer = ({ state = [], action }) => {
  switch (action.type) {
    case 'ADD':
      return state.push(action.payload)
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id)
    default:
      return state
  }
}

export default reducer
