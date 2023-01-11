import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import style from './Home.module.css'

const Home = () => {

    const [breed,setBreed]=useState([]);

    // fetching the data
    const getBreeds=async()=>{
        await axios.get("https://dog.ceo/api/breeds/list/all")
        .then((res)=>{
             console.log(res.data.message)
             setBreed(res.data.message);
        })
    }
    useEffect(() => {
      getBreeds()
    }, [])
    
    let array = Object.keys(breed);
  return (
    <div className={style.All_breed_div}>
        {
            array && array.map((ele)=>(
                <div className={style.Single_breed_div}>
                    <h1>{ele}</h1>
                </div> 
            ))
        }
    </div>
  )
}

export default Home