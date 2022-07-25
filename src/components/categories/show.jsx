import React, { useEffect, useState } from 'react'
import "./main.css"
import { useNavigate } from 'react-router-dom'
const Show = ({products}) => {
  const [loading,setLoading]=useState(true)
  const navigate=useNavigate();
useEffect(()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  setTimeout(()=>{
    setLoading(false)
  },1500)
},[])
  return (
    <>
{
loading ? <div className='loading-separate'>
  <h1>Loading...</h1>
</div> :   <>
    {
      products.map((p)=>{
        return <div>
<div onMouseOver={(e)=>{
e.target.src=p.img2
}}

onMouseLeave={(e)=>{
  e.target.src=p.img1
  }}>
  <img  src={p.img1} alt="ico" />
</div>
<p className='inside-p'>{p.name}</p>
<span className='bottom-div'><p className='inside-p'>₹{ p.price }</p><p  className='inside-p'>Offer {p.discount}%</p> <p className='inside-p'>Size:{p.size}</p><div style={{backgroundColor:`${p.color}`}} className='rount-color'></div></span>
<div onClick={()=>[
  navigate(`/product/${p._id}`)
  
]} className='buty-shop'>Quick shop</div>

        </div>
      })
    }
    </>
}
    </>
    
 
  )
}

export default Show