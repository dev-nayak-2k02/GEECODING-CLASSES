import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Main from "../../pages/main/Main.jsx";
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/pages/main/Main' element={<Main />}/>  
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing