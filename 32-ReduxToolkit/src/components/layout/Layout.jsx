import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Todolist from '../todolist/Todolist'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Todolist/>
    </div>
  )
}

export default Layout