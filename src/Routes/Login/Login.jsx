import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState();

    const handleSubmit=()=>{

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
            <input 
            type="email" 
            placeholder='Enter Email'
            onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <input 
            type="password" 
            placeholder='Enter Password' 
            onChange={(e)=>{setPass(e.target.value)}} />
        </div>
        <div>
            <input type="submit" />
        </div>
        </form>
        
    </div>
  )
}

export default Login