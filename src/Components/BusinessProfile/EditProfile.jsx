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
        <div className={styles.editabout}>
            <h3>About Business</h3>
            <div className={styles.edittext}>
                <input type="text" placeholder="Add your business description here..." />
            </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
