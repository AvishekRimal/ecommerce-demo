import React from 'react'
import { Route } from 'react-router-dom'
import PageLayouts from './pages/Layouts'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Cat from './pages/Cat'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<PageLayouts />}>
        
      <Route index element={<Home/>}/>
      <Route path='details/:id/' element={<Details/>}/>
      <Route path='cat/:cid/' element={<Cat/>}/>
      </Route>
      
    </Routes>
    </>
  )
}

export default App