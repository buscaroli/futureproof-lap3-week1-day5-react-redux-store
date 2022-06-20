import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { shoppingReducer } from './reducers/shoppingReducer'

export const myStore = createStore(
  combineReducers({
    shoppingReducer,
  }),
  applyMiddleware(thunk)
)
