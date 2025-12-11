import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Color from './pages/Color'
import App from './App'
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Color' element={<Color />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing