import {React,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { productCall } from '../../Redux/action'
import Show from './show';
import SortOptions from '../sortoptions/sortOptions';
const Womens = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.mainproduct)
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
dispatch(productCall("womens"))
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

export default Womens