import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Main from "../../pages/main/Main";
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />}/>  
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing