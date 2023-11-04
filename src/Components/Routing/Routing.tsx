import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import React from 'react'

// ................componets.....................
import Home from ".././Layouts/HomeLayout"
import LeftSideGrid from ".././Layouts/LeftTourGridLayout"

const Routing = () => {
  return (
    <Routes>
        
        <Route index element={<Home />} />
        <Route path="leftGrid" element={<LeftSideGrid />}/>
    
    </Routes>
  )
}

export default Routing