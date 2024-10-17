import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx'
import ClientProfile from './Components/ClientProfile.jsx';




function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/clientprofile" element={<ClientProfile />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App
