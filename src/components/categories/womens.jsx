import {React,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { productCall } from '../../Redux/action'
import Show from './show';
import SortOptions from '../sortoptions/sortOptions';
const Womens = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.mainproduct)
  useEffect(()=>{
dispatch(productCall("womens"))
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

export default Womens