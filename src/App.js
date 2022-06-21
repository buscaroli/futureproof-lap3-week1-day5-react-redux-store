import { Routes as Switch, Route } from 'react-router-dom'
import { Header, Footer } from './layout'
import { MainPage, CheckoutPage, ThankYouPage } from './pages'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Switch>
        <Route path="" element={<MainPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
