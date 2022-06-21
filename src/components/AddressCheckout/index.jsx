import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserDetails } from '../../state/actionCreators'
import styles from './index.module.css'

function AddressCheckout() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [postcode, setPostcode] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    e.preventDefault()

    setName(e.target.value)
  }

  const handleSurnameChange = (e) => {
    e.preventDefault()

    setSurname(e.target.value)
  }
  const handleHouseChange = (e) => {
    e.preventDefault()

    setHouseNumber(e.target.value)
  }
  const handleFirstChange = (e) => {
    e.preventDefault()

    setFirst(e.target.value)
  }
  const handleSecondChange = (e) => {
    e.preventDefault()

    setSecond(e.target.value)
  }
  
  const handlePostcodeChange = (e) => {
    e.preventDefault()

    setPostcode(e.target.value)
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(updateUserDetails())
    
    setName('')
    setSurname('')
    setHouseNumber('')
    setFirst('')
    setSecond('')
    setPostcode('')
    
    navigate('/thankyou')
    // Direct to ThankYouPage
  }

  return (
    <form className={styles.wrapper}>
      <label htmlFor="name">Name</label>
      <input onChange={handleNameChange} className={styles.input} type="text" id="name" value={name}/>
      <label htmlFor="surname">Surname</label>
      <input onChange={handleSurnameChange} className={styles.input} type="text" id="surname" value={surname}/>
      <label htmlFor="houseNumber">House Number</label>
      <input onChange={handleHouseChange}  className={styles.input}type="text" id="houseNumber" value={houseNumber}/>
      <label htmlFor="firstLineAddr">First Line Of Address</label>
      <input onChange={handleFirstChange}  className={styles.input}type="text" id="firstLineAddr" value={first}/>
      <label htmlFor="secondLineAddr">Second Line Of Address</label>
      <input onChange={handleSecondChange}  className={styles.input}type="text" id="secondLineAddr" value={second}/>
      <label htmlFor="postcode">Postcode</label>
      <input onChange={handlePostcodeChange} className={styles.input} type="text" id="postcode" value={postcode}/>
      <input onSubmit={handleFormSubmit}  className={`${styles.input} ${styles.btn}`}type="submit" value="Place Order"/>
    </form>
  )
}

export default AddressCheckout
