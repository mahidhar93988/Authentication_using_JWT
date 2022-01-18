import React from 'react'
import "./Registration.css"

export default function Registration() {
    return (
        <>
        
        <div className='home'>
        <div className='main'>
        <h3>Registration</h3>
        <input className='input' type="text" placeholder='firstName' />
        <input className='input' type="text" placeholder='lastname' />
        <input className='input' type="text" placeholder='email' />
        <input className='input' type="password" placeholder='password' />
        <input className='input' type="password" placeholder='conform password'/>
        <button>Create New Account</button>



        </div>
        </div>
        </>
    )
}