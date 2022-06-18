import React, { useState } from 'react'
import './Admin.css'

export default function Admin(props) {
  const [openCustomerPurchases, setOpenCustomerPurchases] = useState(false)
  const [buttonDisplay , setButtonDisplay] = useState('none')
  const onDelete =(idx ,customerIdx ) =>{
    props.deleteExpense(idx ,customerIdx)
  }
  return (
    <div className='admin'>
      <h1>Manager</h1>
      {props.customers.map((customer, customerIdx) => {
        return (
          <div>
            <span>{customer.id} {customer.fullName} <button onClick={() => { setOpenCustomerPurchases(true);setButtonDisplay('flex')}}>🔴</button></span>
            {customer.expenses.map((expense, idx) => {
              if (openCustomerPurchases == true) {
                return (
                  <div>
                    <span>{expense.company} {expense.price} <button onClick={()=>{onDelete(idx , customerIdx)}}>X</button></span>
                  </div>
                )
              }
            })
            }
            <button style={{display: buttonDisplay}} onClick={() =>{ setOpenCustomerPurchases(false);setButtonDisplay('none')}}>Cancel</button>
          </div>
        )
      })}
    </div>
  )
}
