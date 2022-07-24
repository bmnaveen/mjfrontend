
import './App.css';
import NavBar from './components/navbar/navBar';
import {Routes,Route,useLocation,NavLink, Link} from 'react-router-dom';
import Mens from './components/categories/mens';
import Womens from './components/categories/womens';
import All from './components/categories/all';
import CartPage from './components/cartpage/cartPage';
import LogIn from './components/login/logIn';
import Footer from './components/footer/footer';
import Home from './components/categories/home';
import SeprateProduct from './components/separateproduct/seprateProduct';
import {useSelector} from "react-redux"
function App() {
 let user=useSelector((store)=>store.user);

 const checkUser=(x)=>{
  if(!user){
    return <LogIn />
  }
return x
 }
  return (
    <div className="App">
<NavBar/>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/all' element={<All />}/>
  <Route path='/mens' element={<Mens />}/>
  <Route path='/womens' element={<Womens/>}/>
  <Route path='/cart' element={checkUser(<CartPage />)}/>
  <Route path='/login' element={<LogIn />}/>
  <Route  path='/product/:id' element={<SeprateProduct />}/>
</Routes> 
<Footer/>
    </div>
  );
}

export default App;
