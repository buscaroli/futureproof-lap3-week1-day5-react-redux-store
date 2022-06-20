import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { myStore } from './state/store'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={myStore}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
)
