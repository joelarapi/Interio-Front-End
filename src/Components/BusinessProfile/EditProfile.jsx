import React from "react";
import styles from "../BusinessProfile/BusinessProfile.module.css";
import { Link } from "react-router-dom";
const EditProfile = () => {
  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <img src="placeholder.png" alt="profile" className={styles.imageprofile}></img>
          <div className={styles.profileinfo}>
            <h3>Business Name</h3>
            <div className={styles.innerinfo}>
              <Link to={"/"} className={styles.links}>
                <h5>Category</h5>
              </Link>
              <Link to={"/"} className={styles.links}>
                <h5>Location</h5>
              </Link>
              <Link to={"/"} className={styles.links}>
                <h5>14 Clients</h5>
              </Link>
              <div className={styles.profilebutton}>
                <Link to={"/"} className={styles.links}>
                  <button type="button">Promote Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.abouttitle}>
          <h3>About Business</h3>
          <img src="plus.svg" alt="" />
        </div>
        <div className={styles.aboutinput}>
          <input type="text" name="" id="description" placeholder="Add your business description here..." />
        </div>
        <div className={styles.previouswork}>
          <h3>Previous Work</h3>
          <h4>No Previous Work</h4>
        </div>
        <div className={styles.portfolio}>
          <h3>Portfolio</h3>
          <img src="plus.svg" alt="" />
        </div>
        <div className={styles.portfolioUpload}>
          <img src="Frame 83.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
