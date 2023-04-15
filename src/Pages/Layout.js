import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Routers from '../Routers/Routers'

export default function Layout() {
  return (
    <div>
      <Navbar/>
        <Routers/>
      <Footer/>
    </div>
  )
}
