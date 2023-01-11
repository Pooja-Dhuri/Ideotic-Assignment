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

        {/* list of breed and detail of the breed */}
        {/* <div className={style.Navbar_breed_div}>
                <Link to="/detail" className={style.Navbar_detail}>Detail Of Breed</Link>
        </div> */}

        {/* logout button */}
        <div>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar

// https://www.dogbreedinfo.com/images32/DBICLogoDogBreedInfoCenter3.PNG