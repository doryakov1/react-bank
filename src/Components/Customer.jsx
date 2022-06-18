import React, { useState } from 'react'
import './Customer.css'
import { Link } from 'react-router-dom'

export default function Customer(props) {
  const [price , setPrice] = useState(0)
  const [company , setCompany] = useState('')
  const [action , setAction] = useState(false)
  const onAction = ()=>{
   if(action == true){
    return (
      <div>
    <input onChange={(e)=>setPrice(e.target.value)} type='number' placeholder='Price'/>
    <input onChange={(e)=>setCompany(e.target.value)} type='text' placeholder='Company'/>
    <span className='purchase' onClick={()=>{props.onPurchase(company , price);setAction(!action)}}>Purchase</span>
    </div>
    )
   }
  }
  return (
    <div className='customer'>
      <h1>Wellcome {props.customer.fullName}</h1>
      <div className='customer-btn'>
        <button onClick={()=>alert(props.customer.balance)}>Balance</button>
        <button onClick={()=>setAction(!action)}>ACTION</button>
        {onAction()}
        <Link className='link' to='/react-bank'><button>EXIT</button></Link>
        <Link className='link' to='/react-bank/edit'><button>EDIT</button></Link>
      </div>
    </div>
  )
}
