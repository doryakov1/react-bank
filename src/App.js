import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Customer from './Components/Customer';
import Edit from './Components/Edit';
import Admin from './Components/Admin';

import { useState } from 'react';
function App() {
  const [customers , setCustomers] = useState([])
  const [customerIdx , setCustomerIdx] = useState('')
  const addCustomer = (id , fullName , password , balance)=>{
    let customer = {
      id: id,
      fullName: fullName,
      password: password,
      balance: balance,
      expenses: []
    }
    setCustomers([...customers,customer])
    console.log(customers)
  }
  const updateCustomer = (id , fullName , password , balance )=>{
    customers[customerIdx].id = id;
    customers[customerIdx].fullName = fullName;
    customers[customerIdx].password = password;
    customers[customerIdx].balance = balance;
    setCustomers([...customers])
  }
  const onPurchase = (company , price)=>{
    let purchase ={
      company: company,
      price: price
    }
    customers[customerIdx].expenses.push(purchase)
    setCustomers([...customers])
    console.log(customers)
  }
  const deleteExpense = (idx ,customerIdx)=>{
    customers[customerIdx].expenses.splice(idx,1)
    setCustomers([...customers])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/react-bank' element={<HomePage customers={customers} setCustomerIdx={setCustomerIdx}/>} />
          <Route path='/react-bank/register' element={<Register addCustomer={addCustomer}/>} />
          {customers.map((customer)=>{
            return <Route path={'/react-bank/'+customer.fullName} element={<Customer customer={customers[customerIdx]} onPurchase={onPurchase} />} />
          })}
          <Route path='/react-bank/edit' element={<Edit customer={customers[customerIdx]} updateCustomer={updateCustomer}/>} />
          <Route path='/react-bank/admin' element={<Admin customers={customers} deleteExpense={deleteExpense} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
