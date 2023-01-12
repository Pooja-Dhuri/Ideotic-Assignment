import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext() 
export const AuthProvider=({children})=> {
    const[isAuthorized,setIsAuthorised]=useState(false);
    const navigate=useNavigate()

    const login=(username,password)=>{
        if(username && password){
            setIsAuthorised(true);
            navigate("/")
        }
    }

    const logout=()=>{
       setIsAuthorised(false);
    }
    
  return (
    <AuthContext.Provider value={{isAuthorized,login,logout}}>{children}</AuthContext.Provider>
  )
}
