import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import style from './Details.module.css'

const Details = () => {
  
    const [random,setRandom]=useState();
    const [loading,setLoading]=useState(true)

    const getImage=async()=>{
        await axios.get("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{
            //  console.log(res)
             setRandom(res.data.message)
             setLoading(false)
        })
    }
    useEffect(() => {
      getImage()
    }, [])
    

  return (
    <div className={style.random_image_div}>
        {
          loading ? <img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif" alt="gif" /> : <img src={random} alt="random Image"className={style.random_image} />
        }
    </div>
  )
}

export default Details