import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './Details/Details'
import Home from './Home/Home'

const AllRoutes = () => {
  return (
    <div>
        {/* Given path to all Pages */}
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/detail' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes