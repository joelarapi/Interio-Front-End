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
import Footer from "./Components/footer.jsx";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import BusinessView from "./Components/BusinessView/BusinessView.jsx";

Amplify.configure(awsExports);

function App() {
<<<<<<< Updated upstream
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
=======
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
>>>>>>> Stashed changes

    return () => clearTimeout(timer);
  }, []);

<<<<<<< Updated upstream
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/landingPage" && <Navbar />}
      <div className="app">
        {loading ? (
          <Loader />
        ) : (
<<<<<<< Updated upstream
          <Routes>
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clientprofile" element={<ClientProfile />} />
            <Route path="/businessprofile" element={<BusinessProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/businessview" element={<BusinessView />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
=======
          <>
            <Routes>
              <Route path="/landingPage" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/clientprofile" element={<ClientProfile />} />
              <Route path="/businessprofile" element={<BusinessProfile />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
            {/* {location.pathname !== "/login" && location.pathname !== "/landingPage" && <Footer />} */}
          </>
>>>>>>> Stashed changes
        )}
      </div>
    </>
  );
=======
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
                    <Route path="/post/:id" element={<Post/>}/>
                    <Route path="/post/create" element={<PostForm/>}/>
                </Routes>
                    )}
            </div>
        </>
    );
>>>>>>> Stashed changes
}
export default App;