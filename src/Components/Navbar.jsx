import classes from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import notifIcon from "../icons/notifications-bell-icon.png";
import logo from "../icons/interio-logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [userType, setUserType] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Get and decode the id token from local storage
    const getUseType = () => {
      try {
        const idToken = localStorage.getItem("idToken"); // or however you're storing the token
        if (idToken) {
          // Decode the JWT token
          const tokenPayload = JSON.parse(atob(idToken.split(".")[1]));
          // Assuming your Cognito user pool has a custom attribute 'custom:userType'
          // or similar to distinguish between 'user' and 'business'
          setUserType(tokenPayload["custom:userType"]); // or whatever attribute you're using
        }
      } catch (error) {
        console.error("Error getting user type:", error);
      }
    };

    getUseType();
  }, []);

  const handleDashboardClick = (e) => {
    e.preventDefault();
    if (userType === "user") {
      navigate("/client-dashboard");
    } else if (userType === "business") {
      navigate("/business-dashboard");
    }
  };

  const handleGoToPostForm = () =>{
    navigate('/post/create')
  }

  return (
    <>
      <div className={classes.navbar}>
        <img src={logo} className={classes.logo} />
        <div className={classes.leftSide}>
          <button 
              className={classes.postButton}
              onClick={handleGoToPostForm}
            >
              Make a Post
            </button>
          <NavLink 
            to="#" 
            onClick={handleDashboardClick}
          >
            Home
          </NavLink>
          <NavLink to="/my-requests">My Requests</NavLink>
          <NavLink>Profile</NavLink>
          <img src={notifIcon} className={classes.notifIcon} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
