import React   from 'react'
import { useState, useEffect } from "react"
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {getProductCart} from "../../Redux/action"
import axios from "axios";
import "./seprateProduct.css"
const SeprateProduct = () => {
  const {id}=useParams();
  const userId=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [separate,setSeparate]=useState({})
  const [firstImage,setFirstImage]=useState("")
  const [temp,setTemp]=useState("");
  const [loading,setLoading]=useState(true)
useEffect(()=>{
   axios.get(`https://mj-back.herokuapp.com/products/product/${id}`).then((res)=>{
    setSeparate(res.data);
    setFirstImage(res.data.img1)
    return setTimeout(()=>{
      setLoading(false);
},1500)
}).catch((err)=>{
    console.log(err.message)
})

},[])
useEffect(()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  
},[])

const addToCart=()=>{
  if(!userId){
return navigate("/login")
  }
  separate["userId"]=userId;
  delete separate["_id"]
  axios.post("https://mj-back.herokuapp.com/cart",separate).then((res)=>{
   
    dispatch(getProductCart(userId))
    
    setTemp("Product added in bag ")
    setTimeout(()=>{
      setTemp("")
    },3000)
  }).catch((err)=>{
    console.log(err.message)
  })
}
  return (
    <>
{
      loading ? <div className='loading-separate'>
        <h1>Loading...</h1>
      </div>  :  <div className='sep-product'>
      <div>
  <div >
  <img onClick={()=>{
    setFirstImage(separate.img1)
  }} src={separate.img1} alt="ico" />
  </div>
  <div>
  <img onClick={()=>{
    setFirstImage(separate.img2)
  }} src={separate.img2} alt="ico" />
  </div>
      </div>
      <div>
        <img src={firstImage} alt="ico" />
      </div>
      <div>
  
        <div>
        <p>
          {separate.name}
        </p>
        <p className='inside-p'>₹{ (separate.price)-((separate.price)*(separate.discount/100))}</p>
       <p style={{textDecoration:"line-through"}} className='inside-p'>₹{separate.price}</p> 
        <p className='inside-p'>Offer {separate.discount}%</p>
        <p className='inside-p'>Size:{separate.size}</p>
        <span>
        <p >Color:</p><div style={{backgroundColor:`${separate.color}`}} className='rount-color'></div>
        </span>
        
        
        </div>
        <div className='final-cart-div' >
        
        <button onClick={addToCart} className="cart-button">Add to bag</button>
        <p>{temp}</p>
        </div>
      </div>
      </div>
    }
   
    </>
    
  )
}

export default SeprateProduct