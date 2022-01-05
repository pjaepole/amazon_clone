import {snapple} from './Picture'
import React, {useState} from 'react'
function Home(){
    const [pictures,setPictures]=useState(snapple)
    console.log(pictures)
    return (
        <div className='home'>
            <img src={pictures[0]}/>
        </div>
    )
}

export default Home