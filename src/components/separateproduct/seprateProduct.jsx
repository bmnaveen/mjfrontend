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

useEffect(()=>{
   axios.get(`http://localhost:5000/products/product/${id}`).then((res)=>{
    setSeparate(res.data);
    setFirstImage(res.data.img1)
    
}).catch((err)=>{
    console.log(err.message)
})

},[])


const addToCart=()=>{
  if(!userId){
return navigate("/login")
  }
  separate["userId"]=userId;
  delete separate["_id"]
  axios.post("http://localhost:5000/cart",separate).then((res)=>{
    dispatch(getProductCart(userId))
    
  }).catch((err)=>{
    console.log(err.message)
  })
}
  return (
    <div className='sep-product'>
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
      <p className='inside-p'>₹{+(separate.price)*80>=5000 ?  (Math.round((+(separate.price)*80))-((Math.round(+(separate.price)*80)*(45/100)))):+(separate.price)*80}</p>
      {+(separate.price)*80>=5000 ? <p style={{textDecoration:"line-through"}} className='inside-p'>₹{+(separate.price)*80}</p> : null }
      
      {+(separate.price)*80>=5000 ? <p className='inside-p'>Offer {45}%</p> : null }
      <p className='inside-p'>Size:{separate.size}</p>
      <span>
      <p >Color:</p><div style={{backgroundColor:`${separate.color}`}} className='rount-color'></div>
      </span>
      
      
      </div>
      <div>
      <button onClick={addToCart} className="cart-button">Add to bag</button>
      </div>
    </div>
    </div>
  )
}

export default SeprateProduct