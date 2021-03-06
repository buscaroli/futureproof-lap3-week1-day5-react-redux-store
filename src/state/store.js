import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { shoppingReducer } from './reducers/shoppingReducer'
import { userReducer } from './reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const myStore = createStore(
  combineReducers({
    shoppingReducer,
    userReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)
