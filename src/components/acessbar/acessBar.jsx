import React from 'react'
import './acessBar.css'
import {useNavigate,useLocation} from  'react-router-dom'
const AcessBar = () => {
  const navigate=useNavigate();
let access=useLocation();
access=access.pathname.split("/")
  const routeToPage=(e)=>{
   return  navigate(`/${e.target.id}`);
  }
// const style={
//   textDecoration: this.target.id===access[1] ? "underline" : null
// }
  return (
    <div className='acessBar'>
      <p id='all'  style={ {textDecoration:access[1]==="all" ? "underline" : null}}   onClick={routeToPage}>All</p>
      <p id='mens' style={ {textDecoration:access[1]==="mens" ? "underline" : null}}    onClick={routeToPage}>Mens</p>
      <p id='womens' style={ {textDecoration:access[1]==="womens" ? "underline" : null}}    onClick={routeToPage}>Womens</p>
    </div>
  )
}

export default AcessBar