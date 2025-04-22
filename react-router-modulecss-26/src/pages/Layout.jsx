import React from 'react'
import Header from '../components/header/Header'
import Titles from '../components/titles/Titles'
import { Outlet } from 'react-router-dom'
import Customers from '../components/customers/Customers'
import Touch from '../components/touch/Touch'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Titles/>
      <Outlet/>
      <Customers/>
      <Touch/>
      <Footer/>
    </div>
  )
}

export default Layout