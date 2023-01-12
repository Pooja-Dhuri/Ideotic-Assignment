import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import style from './Navbar.module.css'

const Navbar = () => {

  const {isAuthorized,logout}=useContext(AuthContext)
    const navigate=useNavigate();
    const handleLoginClick=()=>{
        if(isAuthorized){
            logout();
    }
    else{
        navigate("/login");
    }
  }
  return (
    <div className={style.Navbar_main_div}>

        {/* logo icon */}
        <div>
            <Link to="/">
            <img src="https://www.dogbreedinfo.com/images32/DBICLogoDogBreedInfoCenter3.PNG" alt="logo" /></Link>
        </div>

        {/* logout button */}
        <div className={style.Logout_button_box}>
            <button className={style.Logout_button} onClick={handleLoginClick}>{isAuthorized ?"logout":"login"}</button>
        </div>
    </div>
  )
}

export default Navbar

// https://www.dogbreedinfo.com/images32/DBICLogoDogBreedInfoCenter3.PNG