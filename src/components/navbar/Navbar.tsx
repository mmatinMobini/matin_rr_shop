import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-8 border-b shadow-amber-300 flex justify-between flex-row-reverse items-center'>

    <ul className='flex '>
    <li>      <Link to={"/store"}> Home</Link>  </li>    
    <li>      <Link to={"/"} >Store </Link>   </li>    
    </ul>

    <div >
        bsaket
    </div>


    </div>
  )
}

export default Navbar