
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './routes/Signup'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element :<Signup/>,
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
