import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import style from './Details.module.css'

const Details = () => {
  
    const [random,setRandom]=useState();

    const getImage=async()=>{
        await axios.get("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{
            //  console.log(res)
             setRandom(res.data.message)
        })
    }
    useEffect(() => {
      getImage()
    }, [])
    

  return (
    <div className={style.random_image_div}>
        <img src={random} alt="random Image"className={style.random_image} />
    </div>
  )
}

export default Details