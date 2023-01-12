import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './Details/Details'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'

const AllRoutes = () => {
  return (
    <div>
        {/* Given path to all Pages */}
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/detail' element={<Details/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/register'element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes