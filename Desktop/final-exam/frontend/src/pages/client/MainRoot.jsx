import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const MainRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRoot