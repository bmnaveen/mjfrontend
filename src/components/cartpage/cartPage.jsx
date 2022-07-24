import React, { useEffect, useState } from 'react'
import  "./cartPage.css"
import {getProductCart} from "../../Redux/action"
import { useDispatch ,useSelector} from 'react-redux'
import axios from 'axios'
const CartPage = () => {
const dispatch=useDispatch();
const userId=useSelector((store)=>store.user)
const cart=useSelector((store)=>store.cart)
const [temp,setTemp]=useState("");
let sum=0;

cart.forEach((e)=>{
  if(e.price*80>=5000){
    sum+=((+(e.price)*80)-(((+(e.price)*80)*(45/100))))
  }else{
    sum+=e.price*80
  }
})
useEffect(()=>{
dispatch(getProductCart(userId))
},[])

const deleteCart=(x)=>{
  axios.delete(`http://localhost:5000/cart/${x}`).then((res)=>{
    dispatch(getProductCart(userId))
  }).catch((err)=>{
    console.log(err.message)
  })
}
  return (
    <div className='Cart-Page'>

      <div>
        {
          cart.map((separate)=>{
            return <div>
              <div>
                <img src={separate.img1} alt="ico" />
              </div>
              <div>
      <p>
        {separate.name}
      </p>
      <p className='inside-p'>₹{+(separate.price)*80>=5000 ?  ((+(separate.price)*80)-(((+(separate.price)*80)*(45/100)))):+(separate.price)*80}</p>
      {+(separate.price)*80>=5000 ? <p style={{textDecoration:"line-through"}} className='inside-p'>₹{+(separate.price)*80}</p> : null }
      
      {+(separate.price)*80>=5000 ? <p className='inside-p'>Offer {45}%</p> : null }
      <p className='inside-p'>Size:{separate.size}</p>
      
     <div style={{backgroundColor:`${separate.color}`}} className='rount-color'></div>
 
 <button onClick={()=>[
  deleteCart(separate._id)
 ]} className='m-button'>Remove</button>
      
      </div>

            
            </div>
          })
        }
      </div>
      {
        cart.length>=1 ? <div>
            <div>
          
          <h2>Total=₹{sum}</h2>
          <h2>Gst 5%=₹{((sum*(5/100)))}</h2>
          <h2>Subtotal=₹{sum+((sum*(5/100)))}</h2>
          <button onClick={()=>{
            setTemp("Processing....")
            return setTimeout(()=>{
              setTemp("Payment sucessfull....")
            },3000)
          }} >Pay</button>
          <p>{temp}</p>
                </div>
        </div>   : <div>
                <h2 style={{marginTop:"150px"}}>Empty Cart</h2>
              </div>
              
      }
      
    </div>
  )
}

export default CartPage