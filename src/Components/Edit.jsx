import React from 'react'
import { useState } from 'react';

export default function Edit(props) {
  const [id, setId] = useState('');
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [money, setMoney] = useState('')
  const checkValidtionAndAddCustomer = () => {
    if (digits_only(id) == false || id.length != 9) {
      alert('Id must be 9 length and only numbers')
    } else if (userName.length < 4) {
      alert('User name must at least 4 length')
    } else if (password.length < 6 || password != confirmPass) {
      alert('Password name must at least 6 length and the same as confirm password')
    } else if (money < 0 || money > 1000000) {
      alert('Money must be between 0 to 1000000')
    } else {
      props.updateCustomer(id, userName, password, money)
    }
  }
  const digits_only = string => [...string].every(c => '0123456789'.includes(c));

  return (
    <div className='register'>
      <h1>EDIT</h1>
      <input onChange={(e) => setId(e.target.value)} type="text" placeholder={props.customer.id} />
      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder={props.customer.fullName} />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder={props.customer.password} />
      <input onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder={props.customer.password} />
      <input onChange={(e) => setMoney(e.target.value)} type="text" placeholder={props.customer.balance} />
      <button onClick={checkValidtionAndAddCustomer}>Update</button>
    </div>
  )
}