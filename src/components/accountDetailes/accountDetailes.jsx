import React, { useState } from 'react'
import './accountDetailes.css'
import {useNavigate} from "react-router-dom"
import { changeUser } from '../../Redux/action'
import { useDispatch,useSelector } from 'react-redux'
const AccountDetailes = () => {
  const navigate=useNavigate();
const dispatch=useDispatch();
const user=useSelector((store)=>store.user)
const cart=useSelector((store)=>store.cart.length)
  return (
    <div className='accDetailes'>
      {
user  ? <button onClick={()=>{
 dispatch(changeUser(null)) 
  navigate("/")
  window.location.reload(false);
}} className='m-button'>
  SignOut
</button> :<button onClick={()=>{
  navigate("/login")
}} className='m-button'>
  SignIn
</button>
      }
      
<div onClick={()=>{
  navigate("/cart")
}}>
  <img src="trolley.png" alt="cart-ico" />
  <p>{cart}</p>
</div>

{/* {
user ? <div className='loginDetailes'>
  Login
</div> : null
} */}
    </div>
  )
}

export default AccountDetailes