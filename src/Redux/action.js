import axios from "axios";
export const MAINPRODUCT="MAINPRODUCT";
export const SORTORDERASS="SORTORDERASS";
export const SORTORDERDEC="SORTORDERDEC";
export const SETUSER="SETUSER";
export const ADDCART="ADDCART"


const addCart=(payload)=>({
  type:ADDCART,
  payload
})




export const addMainProduct=(payload)=>(
    {
    type:MAINPRODUCT,
    payload:payload
        })
export const sortAss=()=>(
{
type:SORTORDERASS,
})
export const sortDes=()=>(
{
type:SORTORDERDEC,
})
export const changeUser=(payload)=>(
  {
  type:SETUSER,
  payload
  })
export  const productCall=(category)=>async(dispatch)=>{

await axios.get(`http://localhost:5000/products/${category}`).then((res)=>{
   
  dispatch(addMainProduct(res.data)) ; 
}).catch((err)=>{
    console.log(err.message)
})
}

export  const getProductCart=(id)=>async(dispatch)=>{

  await axios.get(`http://localhost:5000/cart/${id}`).then((res)=>{
    
    dispatch(addCart(res.data)) ; 
  }).catch((err)=>{
      console.log(err.message)
  })
  }

  


