import React from 'react'
import './logo.css'
import {useNavigate} from 'react-router-dom'
const Logo = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>{
      navigate("/")
    }} className='logo-pic'>
        <img src="mj-logo.jpg" alt="ico" />
    </div>
  )
}

export default Logo