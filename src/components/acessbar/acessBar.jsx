import React from 'react'
import './acessBar.css'
import {useNavigate} from  'react-router-dom'
const AcessBar = () => {
  const navigate=useNavigate();

  const routeToPage=(e)=>{
   return  navigate(`/${e.target.id}`);
  }

  return (
    <div className='acessBar'>
      <p id='all' onClick={routeToPage}>All</p>
      <p id='mens' onClick={routeToPage}>Mens</p>
      <p id='womens' onClick={routeToPage}>Womens</p>
    </div>
  )
}

export default AcessBar