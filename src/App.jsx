import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx'
import Navbar from './Components/Navbar.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';




function App() {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App
