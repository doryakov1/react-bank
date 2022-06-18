import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './HomePage.css'
export default function HomePage(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate();
    const checkValidtion = () => {
        const isUserExisting = (customer) => customer.fullName == userName && customer.password == password;
        let foundIdx = props.customers.findIndex(isUserExisting)
        if (userName == 'ADMIN' && password == 'ADMIN') {
            nav('/react-bank/admin')
        } else if (foundIdx != -1){
            props.setCustomerIdx(foundIdx)
            nav(`/react-bank/${userName}`)
        }else{
            alert('User didnt found')
        }
    }
    return (
        <div className='home-page'>
            <h1>SV-BANK</h1>
            <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='User Name' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            <Link className='link' to='/react-bank/register'>Create new user</Link>
            <button onClick={checkValidtion}>ENTER</button>
        </div>
    )
}
