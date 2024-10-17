import React from "react";
import styles from "./ClientProfile.module.css";

const ClientProfile = () => {
  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <img src="Frame 56.png" alt="profile" className={styles.imageprofile}></img>
          <div className={styles.profileinfo}>
            <h3>Full Name</h3>
            <div className={styles.innerinfo}>
              <h5>3 Total Posts</h5>
              <h5>1 Finished Work</h5>
            </div>
          </div>
        </div>
        <div className={styles.mainposts}>
          <div className={styles.postcontent}>
            <div className={styles.innercontent}>
              <div className={styles.posterstext}>
                <h3>Request Title</h3>
                <h5>9 hours ago | Category</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              </div>
              <div className={styles.posters}>
                <img src="pexels-algrey-3705539 2.png" alt="post"></img>
                <img src="Frame 60.png" alt="post"></img>
                <img src="pexels-algrey-3705539 2 (1).png" alt="post"></img>
              </div>
            </div>
          </div>
          <div className={styles.postcontent}>
            <div className={styles.innercontent}>
              <div className={styles.posterstext}>
                <h3>Request Title</h3>
                <h5>9 hours ago | Category</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              </div>
              <div className={styles.posters}>
                <img src="pexels-algrey-3705539 2.png" alt="post"></img>
                <img src="Frame 60.png" alt="post"></img>
                <img src="pexels-algrey-3705539 2 (1).png" alt="post"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
