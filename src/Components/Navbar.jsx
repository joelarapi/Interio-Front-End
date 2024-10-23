import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import notifIcon from "../icons/notifications-bell-icon.png";
import logo from "../icons/interio-logo.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={logo} className={classes.logo} />
      <div className={classes.leftSide}>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink>My Requests</NavLink>
        <NavLink>Profile</NavLink>
        <img src={notifIcon} className={classes.notifIcon} />
      </div>
    </div>
  );
};

export default Navbar;
