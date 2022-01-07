import './Home.css'
import {snapple} from './Picture'
import React, {useState, useEffect} from 'react'
import Product from './Product'
import Mockproducts from './Mockproduct'
import Adbanner from './Adbanner'
function Home(){
    const mockdatanumber=[0,1,2,3]
    const [mockproducts, setMockproducts]=useState([])
    const [picindex,setPicindex]=useState(0)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setMockproducts(json)})
            .catch((err)=>console.log(err))
    },[])
    console.log(mockproducts)
    
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
    

    return (
        <div  className='home'> 
            <img className='home_img'alt='amazon product ads' src={snapple[picindex]}/>
            <div className='home_leftarrow' onClick={leftarrow}>&lt;</div>   
            <div className='home_rightarrow' onClick={rightarrow}>&#62;</div>
            <div className='home_product_list'>
                {mockdatanumber.map((product)=>( 
                <Product key={product} product={product} />))}
            </div>
            <div className='home_mockproduct_container'>
                <h3>Popular items from Mock Items</h3>
                <div className='home_mockproduct_container_imgs'>
                {mockproducts.map((product)=>{return <Mockproducts product={product} key={product.id}/>})}
                </div>
            </div>
            <Adbanner/>
            <div className='home_product_list'>
                {mockdatanumber.map((product)=>( 
                <Product key={product} product={product} />))}
            </div>
        </div>
    )
}

export default Home
