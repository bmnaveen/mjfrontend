import React, { useEffect } from 'react'
import { productCall } from '../../Redux/action'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import Show from './show'
import SortOptions from '../sortoptions/sortOptions'
const Mens = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.mainproduct);
  useEffect(()=>{
dispatch(productCall("mens"))
  },[])
  return (
    <div className='main-container'>
      <div>
      <SortOptions/>
      </div>
    <div>
    <Show products={products}/>
    </div>
    
    </div>
  )
}

export default Mens