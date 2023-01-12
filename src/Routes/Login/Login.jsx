import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import style from './Login.module.css'

const Login = () => {

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState();
    const {login}=useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        let getemail=JSON.parse(localStorage.getItem("useremail"))
        let getpass=JSON.parse(localStorage.getItem("userpass"))
        if(getemail===email && getpass===pass){
            alert("login success")
            login()
        }
        else{
            alert("login failed")
        }
    }
  return (
    <div className={style.login_div}>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={style.input_div}>
            <input 
            type="email" 
            placeholder='Enter Email'
            onChange={(e)=>{setEmail(e.target.value)}}/>
            <input 
            type="password" 
            placeholder='Enter Password' 
            onChange={(e)=>{setPass(e.target.value)}} />
        </div>
        <div className={style.submit_button}>
            <input type="submit" />
        </div>
        </form>
        
    </div>
  )
}

export default Login