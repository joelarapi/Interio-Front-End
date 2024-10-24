import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Components/Login.jsx";
import Navbar from "./Components/Navbar.jsx";
import ClientDashboard from "./Components/Dashboard/ClientDashboard.jsx"
import BusinessDashboard from "./Components/Dashboard/BusinessDashboard.jsx";
import ClientProfile from "./Components/ClientProfile/ClientProfile.jsx";
import BusinessProfile from "./Components/BusinessProfile/BusinessProfile.jsx";
import EditProfile from "./Components/BusinessProfile/EditProfile.jsx";
import Post from "./Components/Post/Post.jsx";
import PostForm from "./Components/PostForm/PostForm.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Loader from "./Components/Loader/Loader.jsx";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import BusinessView from "./Components/BusinessView/BusinessView.jsx";

Amplify.configure(awsExports);

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

    return () => clearTimeout(timer);
  }, []);

    return (
        <>
            {(location.pathname !== "/login" && location.pathname !== "/landingPage") && <Navbar />}
            <div className="app">
            {loading ? (
                    <Loader />
                ) : (
                <Routes>
                    <Route path="/landingPage" element={< LandingPage />} />
                    <Route path="/client-dashboard" element={<ClientDashboard/>} />
                    <Route path="/business-dashboard" element={<BusinessDashboard/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/clientprofile" element={<ClientProfile />} />
                    <Route path="/businessprofile" element={<BusinessProfile />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/businessview" element={<BusinessView />} />
                    <Route path="/post/:id" element={<Post/>}/>
                    <Route path="/post/create" element={<PostForm/>}/>
                </Routes>
                    )}
            </div>
        </>
    );
}
export default App;