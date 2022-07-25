import  { React,useEffect,useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {productCall} from '../../Redux/action'
import Show from './show'
import SortOptions from '../sortoptions/sortOptions'
const All = () => {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false)
 

const products=useSelector((store)=>store.mainproduct);


useEffect(()=>{
  
  dispatch(productCall("all"))
  setLoading(true)
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

export default All