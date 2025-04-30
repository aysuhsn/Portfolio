import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/register/Register'
import Login from './pages/login/Login'


function App() {
  const router = createBrowserRouter([
    {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
    ]
  },
  
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
