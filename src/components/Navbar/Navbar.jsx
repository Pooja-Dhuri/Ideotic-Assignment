import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.Navbar_main_div}>

        {/* logo icon */}
        <div>
            <Link to="/">
            <img src="https://www.dogbreedinfo.com/images32/DBICLogoDogBreedInfoCenter3.PNG" alt="logo" /></Link>
        </div>

        {/* logout button */}
        <div className={style.Logout_button_box}>
            <button className={style.Logout_button}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar

// https://www.dogbreedinfo.com/images32/DBICLogoDogBreedInfoCenter3.PNG