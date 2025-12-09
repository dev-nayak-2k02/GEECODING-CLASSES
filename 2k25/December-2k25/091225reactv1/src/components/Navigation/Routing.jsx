import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Link from './Link'
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Link/>
              <Route path='/Link' element={<Link />}/>  
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing