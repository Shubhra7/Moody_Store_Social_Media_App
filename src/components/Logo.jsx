import React from 'react'
import logo from '../assets/logo2.png'  // adjust path as needed

const Logo = ({ width = '100px' }) => {
  return (
    <img
      src={logo}
      alt="Site Logo"
      style={{ width }}
      className="rounded-lg"
    />
  )
}

export default Logo