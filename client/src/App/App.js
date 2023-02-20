import React from 'react';
import './App.css';
import AppAdmin from "./AppAdmin";
import AppSeller from "./AppSeller";
import UserPage from "./UserPage";
import {  Route, Routes } from "react-router-dom";

function App() {
    return (

        <Routes>
            {/* Routy ogólne */}
            <Route index element={<UserPage />} />
            <Route path="/admindashboard/*" element={<AppAdmin />} />
            <Route path="/panel/*" element={<AppSeller />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        
    )
}
export default App;