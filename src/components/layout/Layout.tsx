import React from 'react'
import Navbar from '../navbar/Navbar'

interface Ilayout {
    children : React.ReactNode
}

function Layout( {children  } : Ilayout ) {
  return (
    <>
    <Navbar />
    {children }
    
    </>
  )
}

export default Layout