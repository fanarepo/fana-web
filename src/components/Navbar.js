import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import './Navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'
import navbarImpact from '../assets/navbarImpact.png'
import navbarCharities from '../assets/navbarCharities.png'
import navbarBrands from '../assets/navbarBrands.png'
import navbarWallet from '../assets/navbarWallet.png'
import navbarAccount from '../assets/navbarAccount.png'


export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

  return (
    <nav>
      
      <ul>
        <li><img src={navbarCharities}/><Link to="/">Home</Link></li>
        <li><img src={navbarImpact}/><Link to="/tutorial">Impact</Link></li>
        <li><img src={navbarBrands}/><Link to="/brands">Brands</Link></li>
        <li><img src={navbarWallet}/><Link to="/wallet">Wallet</Link></li>
        {!user && <li><img src={navbarAccount}/><Link to="/login">Login</Link></li>}
        {user && <li onClick={() => logout()} ><img src={navbarAccount}/>Logout</li>}
      </ul>
    </nav>
  )
}
