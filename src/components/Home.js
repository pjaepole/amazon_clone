import './Home.css'
import {snapple} from './Picture'
import React, {useState} from 'react'
import Product from './Product'
function Home(){
    const leftarrow=()=>{
        if(picindex===0){
            setPicindex(3)
        } else {
            setPicindex(picindex-1)
        }
    }
    const rightarrow=()=>{
        if(picindex===3){
            setPicindex(0)
        } else {
            setPicindex(picindex+1)
        }
    }
    const mockdatanumber=[0,0,0,0,0,0,0,0,0,0,0,0]
    const [picindex,setPicindex]=useState(0)
    return (
        <div  className='home'> 
            <img className='home_img'alt='amazon product ads' src={snapple[picindex]}/>
            <div className='home_leftarrow' onClick={leftarrow}>&lt;</div>   
            <div className='home_rightarrow' onClick={rightarrow}>&#62;</div>
            <div className='home_product_list'>
                {mockdatanumber.map((x)=>{return <Product/>})}
            </div>
            
        </div>
    )
}

export default Home

  // ,
                    // border:"solid orange",
                    // backgroundSize:"cover",
                    // backgroundRepeat:"no-repeat",
                    // height:"45vh",
                    // display:"flex",
                    // justifyContent:'space-between',
                    // alignItems:'center',
                    // fontSize:'45px'




                  /*   <div  className='home'>
                    <div className='home_background_img'
                        style={
                            {background: `url(${snapple[picindex]})`}
                    }
                    >
        
                     <div className='home_leftarrow' onClick={leftarrow}>&lt;</div>   
                     <div className='home_rightarrow' onClick={rightarrow}>&#62;</div>   
                    </div> 
                    
                </div>        */ 