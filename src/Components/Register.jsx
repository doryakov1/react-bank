import React from 'react'
import { useState } from 'react'
import './Register.css'
export default function Register(props) {
  const [id, setId] = useState('');
  const [userName ,setUserName] = useState('')
  const [password ,setPassword] = useState('')
  const [confirmPass ,setConfirmPass] = useState('')
  const [money ,setMoney] = useState('')
  const checkValidtionAndAddCustomer = ()=>{
    if(digits_only(id) == false || id.length != 9){
      alert('Id must be 9 length and only numbers')
    }else if(userName.length < 4){
      alert('User name must at least 4 length')  
    }else if(password.length < 6 || password != confirmPass){
      alert('Password name must at least 6 length and the same as confirm password')  
    }else if(money < 0 || money > 1000000){
      alert('Money must be between 0 to 1000000')
    }else{
      props.addCustomer(id , userName , password , money) 
    }
  }
  const digits_only = string => [...string].every(c => '0123456789'.includes(c));

  return (
    <div className='register'>
      <h1>REGISTER</h1>
      <input onChange={(e)=>setId(e.target.value)} type="text" placeholder='ID'/>
      <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='User Name'/>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
      <input onChange={(e)=>setConfirmPass(e.target.value)} type="password" placeholder='Confirm Pass'/>
      <input onChange={(e)=>setMoney(e.target.value)} type="text" placeholder='Money'/>
      <button onClick={checkValidtionAndAddCustomer}>Create</button>
    </div>
  )
}
