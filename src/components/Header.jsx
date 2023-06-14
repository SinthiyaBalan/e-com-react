import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className= {` ${styles.nav} main`}>
        <Link to= "/products">Our Catelogue</Link>
        <Link to= "/contact">Contact Us</Link>
    
    </div>
  )
}

export default Header