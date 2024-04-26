import React from 'react'
import { Route, 
         createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Code from './pages/Code'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='code' element={<Code />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
