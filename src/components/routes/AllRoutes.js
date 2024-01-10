import React from 'react'
import { Routes, Route } from "react-router-dom";
import MyGallery from "../../pages/MyGallery";
import Home from "../../pages/Home";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="galeria" element={<MyGallery />} />
        </Routes>
    )
}

export default AllRoutes