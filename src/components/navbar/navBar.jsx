import React from 'react'
import Logo from '../logo/logo'
import './navBar.css'
import AccountDetailes from '../accountDetailes/accountDetailes.jsx'
import AcessBar from '../acessbar/acessBar'
const NavBar = () => {
  return (
    <nav className='navBarTop'>
      <Logo/>
      <AcessBar/>
      <AccountDetailes/>
    </nav>
  )
}

export default NavBar

