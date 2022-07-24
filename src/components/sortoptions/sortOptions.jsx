import React from 'react'
import { useDispatch } from 'react-redux'
import {sortAss,sortDes} from "../../Redux/action"
const SortOptions = () => {
  const dispatch=useDispatch();



  return (
    <>
        <h2>Sort by price</h2>
        
        <button onClick={()=>[
          dispatch(sortAss())
        ]} className='m-button'>High to low</button>
        <br />
        <button onClick={()=>[
          dispatch(sortDes())
        ]} className='m-button'>Low to High</button>
       
    </>
  )
}

export default SortOptions