import React from 'react'
import "./main.css"
import { useNavigate } from 'react-router-dom'
const Show = ({products}) => {
  const navigate=useNavigate();

  return (
    <>
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
<span className='bottom-div'><p className='inside-p'>₹{+ p.price *80}</p>{(+ p.price *80)>=5000 ? <p  className='inside-p'>Offer 45%</p> : null}  <p className='inside-p'>Size:{p.size}</p><div style={{backgroundColor:`${p.color}`}} className='rount-color'></div></span>
<div onClick={()=>[
  navigate(`/product/${p._id}`)
]} className='buty-shop'>Quick shop</div>

        </div>
      })
    }
    </>
  )
}

export default Show