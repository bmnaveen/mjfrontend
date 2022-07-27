import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {getProductCart} from '../../Redux/action'
import { useDispatch,useSelector } from 'react-redux'
const Home = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  },[])
  const navigate=useNavigate();
  const dispatch=useDispatch();
 const userId=useSelector((store)=>store.user)
useEffect(()=>{
dispatch(getProductCart(userId))
},[])

  return (
    <div onClick={()=>{
      navigate("/all")
    }} className='home-main'>
<div>
  <img src="homeimg4.webp" alt="ico" />
</div>
<h2>Unbelievable Deals</h2>
<button className='m-button'>View All</button>
    </div>
  )
}

export default Home