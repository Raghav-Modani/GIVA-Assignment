import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route , useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [email , setemail] = useState(
        JSON.parse(localStorage.getItem('email')) || ''
    )
    const [pass , setpass] = useState(
        JSON.parse(localStorage.getItem('pass')) || ''
    )
    const handleSubmit = () => {
        var input = document.getElementById("checkpass")
        const checkpass = input.value
        if(checkpass === pass){
            navigate('/login')
        }
        else{
            alert('Password does not match')
        }
    }
    useEffect(() => {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("pass", JSON.stringify(pass));
      }, [email,pass]);
  return (
    <div>
        <h3>Signup Here</h3>
        <form>
            <input type="email" placeholder='Email' onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setpass(e.target.value)}/>
            <input type="password" placeholder='Confirm Password' id='checkpass'/>

            <button type='default' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Signup