const initState = { balance: 10 }

export const shoppingReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return { balance: state.balance + action.payload }
    // return [
    //   {
    //     id: 1,
    //     title: 'title',
    //     price: '100',
    //     description: 'description',
    //     category: 'jewelery',
    //   },
    //   {
    //     id: 2,
    //     title: 'title2',
    //     price: '200',
    //     description: 'description2',
    //     category: 'jewelery',
    //   },
    // ]
    case 'REMOVE':
      return { balance: state.balance - action.payload }
    //   {
    //     id: 1,
    //     title: 'title',
    //     price: '100',
    //     description: 'description',
    //     category: 'jewelery',
    //   },
    // ]
    default:
      return state
  }
}
