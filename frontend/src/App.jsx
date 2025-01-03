
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './routes/Signup'
import Signin from './routes/Signin'
import Dashboard from './routes/Dashboard'
import Sendmoney from './routes/Sendmoney'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element :<Signup/>,
   },
   {
    path:"/signin",
    element :<Signin/>,
   },
   {
    path:"/dashboard",
    element :<Dashboard/>,
   },
   {
    path:"/sendmoney",
    element :<Sendmoney/>,
   },
   
])

function App() {

  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default App
