import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx'
import Navbar from './Components/Navbar.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ClientProfile from './Components/ClientProfile.jsx';
import BusinessProfile from './Components/BusinessProfile.jsx';




function App() {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/clientprofile" element={<ClientProfile />} />
                    <Route path="/businessprofile" element={<BusinessProfile />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App
