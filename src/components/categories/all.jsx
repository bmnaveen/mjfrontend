import  { React,useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {productCall} from '../../Redux/action'
import Show from './show'
import SortOptions from '../sortoptions/sortOptions'
const All = () => {
  const dispatch=useDispatch();

 

const products=useSelector((store)=>store.mainproduct);


useEffect(()=>{
  
  dispatch(productCall("all"))
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

export default All