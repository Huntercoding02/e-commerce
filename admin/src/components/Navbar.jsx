import React from 'react'
import {assets} from "../assets/assets"
const Navbar = () => {
  return (
    <div>
        <img src={assets.logo}></img>
        <button>Logout</button>
    </div>
  )
}

export default Navbar