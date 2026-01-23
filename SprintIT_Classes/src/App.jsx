import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
         <Home />
      </BrowserRouter>
      
    </div>
  )
}

export default App
