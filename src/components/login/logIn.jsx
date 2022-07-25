import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { changeUser } from '../../Redux/action';
import "./login.css";
import axios from "axios";
import { getProductCart } from '../../Redux/action';
const LogIn = () => {

  const navigate=useNavigate();
const dispatch=useDispatch();
  const [message,setMessage]=useState("")
  const [user,setUser]=useState({
    Mobile:"",
    Password:""
  });
  const changeUserData=(e)=>{
let {id,value}=e.target;
setUser({
  ...user,[id]:value
})

  }
  const checkData=()=>{
    if(user.Mobile.length>=11){
      setMessage("Invalid data")
      setTimeout(()=>{
       setMessage("")
     },3000)
     return false
    }
    for(let x in user){
      if(user[x].length<=9){
        setMessage("Invalid data")
         setTimeout(()=>{
          setMessage("")
        },3000)
        return false
      }
    }
    return true
  }
  const further=(x)=>{
    setMessage("")
    dispatch(changeUser(x))
    dispatch(getProductCart(x))
    navigate(-1)
     
  }
  const loginUser=()=>{
   if(!checkData()){
    return;
   }
    axios.post("http://localhost:5000/user/login",{
      "Mobile":user.Mobile,
      "Password":user.Password
    }).then((res)=>{
      if(!res.data){
      return  setMessage("use different credentials")
      }
      further(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    }
  const signupUser=()=>{
    if(!checkData()){
      return;
     }
    axios.post("http://localhost:5000/user/signup",{
      "Mobile":user.Mobile,
      "Password":user.Password
    }).then((res)=>{
      if(!res.data){
        return setMessage("use different credentials")
      }
      further(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    }
  return (
    <div className='login-main'> 

    <div>
    <h3>{message}</h3>
    <input onChange={changeUserData}  id='Mobile' type="number" placeholder=' 10 digit Mobile number'/>
    <br />
    <input onChange={changeUserData} id='Password' type="password"  placeholder=' Minimum 10 charecter Password' />
    <br />
    <div>
    <button onClick={loginUser} className='sign-shop'>Signin</button><button onClick={signupUser} className='sign-shop'>Signup</button>
    </div>
    </div>
      
    </div>
  )
}

export default LogIn


