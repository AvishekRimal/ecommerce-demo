import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'

const PageLayouts =()=> {
  return (
    <>
    <Header></Header>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default PageLayouts