import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../Components/Header/Footer/Footer'

export const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
