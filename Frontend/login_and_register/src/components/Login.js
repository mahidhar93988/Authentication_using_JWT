import React from 'react'
// import Registration from './Registration';
import {
    Link
  } from 'react-router-dom';
import "./Login.css"

export default function login() {
    return (
        <div className='home'>
        <div className='main'>
        <h3>Login</h3>
        <input className='input' type="text" placeholder='username' />
        <br />
        <input className='input' type="password" placeholder='password' />
        <br />
        <button>Login</button>
        <br />
        <Link to='/Registration' ><button>Sign up</button></Link>
        </div>
        </div>
    )
}
