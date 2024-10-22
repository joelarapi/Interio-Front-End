import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Navbar from "./Components/Navbar.jsx";
import Dashboard from "./Components/Dashboard/BusinessDashboard.jsx";
import ClientProfile from "./Components/ClientProfile/ClientProfile.jsx";
import BusinessProfile from "./Components/BusinessProfile/BusinessProfile.jsx";
import EditProfile from "./Components/BusinessProfile/EditProfile.jsx";

import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/login" && <Navbar />}
            <div className="App">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/clientprofile" element={<ClientProfile />} />
                    <Route path="/businessprofile" element={<BusinessProfile />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                </Routes>
            </div>
        </>
    );
}
export default App;