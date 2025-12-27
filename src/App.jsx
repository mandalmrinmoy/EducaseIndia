import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Account from '../pages/Account'

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/account',
      element:<Account/>
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App