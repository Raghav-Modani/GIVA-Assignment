import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route , useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email , setemail] = useState('')
    const [pass , setpass] = useState('')
    const checkvalidity = (e) => {
        e.preventDefault();
        const getemail = JSON.parse(localStorage.getItem('email'));
        const getpass = JSON.parse(localStorage.getItem('pass'));
        console.log(getemail , getpass)
        console.log(email , pass)
        if(getemail === email && getpass === pass){
            navigate('/post')
        }
        else{
            alert('Credientials does not match')
        }
    }
  return (
    <div>
        <h3>Login Here</h3>
        <form>
            <input type="email" placeholder='Email' onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setpass(e.target.value)}/>
            <button type='default' onClick={checkvalidity}>Login</button>
        </form>
    </div>
  )
}

export default Login