import React, { useEffect,useState } from 'react'
import { productCall } from '../../Redux/action'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import Show from './show'
import SortOptions from '../sortoptions/sortOptions'
const Mens = () => {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false)
  const products=useSelector((store)=>store.mainproduct);
  useEffect(()=>{
dispatch(productCall("mens"))
setTimeout(()=>{
  setLoading(true)
},1500)
  },[])
  return (
    <>
    {
      loading ?<div className='main-container'>
      <div>
      <SortOptions/>
      </div>
    <div>
    <Show products={products}/>
    </div>
    
    </div> : <div className='loading-separate'>
      <h1>Loading...</h1>
    </div>
    }
    </>
    
  )
}

export default Mens