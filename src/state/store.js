import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { shoppingReducer } from './reducers/shoppingReducer'

export const myStore = createStore(shoppingReducer, devToolsEnhancer())
