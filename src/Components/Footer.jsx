import React from "react";
import classes from "./Footer.module.css";
import logo from "../icons/interio-logo.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.footerDiv}>
            <img src={logo}/>
            <p  className={classes.footerDivText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et?</p>
        </div>
        <div className={classes.footerDiv}>
            <p className={classes.footerDivTitle}>Product</p>
            <a href="/landingPage" className={classes.footerDivLinks}>Landing Page</a>
            <a href="/dashboard" className={classes.footerDivLinks}>Home</a>
            <a href="/businessprofile" className={classes.footerDivLinks}>Proflie</a>
        </div>
        <div className={classes.footerDiv}>
            <p className={classes.footerDivTitle}>Help</p>
            <p>Support</p>
            <p>FAQ</p>
        </div>
        <div className={classes.footerDiv}>
            <p className={classes.footerDivTitle}>Contact</p>
            <p>interio.alb@gmail.com</p>
            <p>+355 69 455 4500</p>
        </div>
    </div>
  );
};

export default Footer;