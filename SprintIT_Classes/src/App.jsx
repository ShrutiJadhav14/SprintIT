import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      
    </div>
  )
}

export default App
