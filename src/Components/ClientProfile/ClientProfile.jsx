import React from "react";
import styles from "../BusinessProfile/BusinessProfile.module.css"
import { Link } from "react-router-dom";

const ClientProfile = () => {
  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <img src="client1.png" alt="profile" className={styles.imageprofile}></img>
          <div className={styles.profileinfo}>
            <h3>Full Name</h3>
            <div className={styles.innerinfo}>
              <div className={styles.starsprofiles}>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
              </div>
              <Link to={"/"} className={styles.links}>
                <h5>2 Available Works</h5>
              </Link>
              <Link to={"/"} className={styles.links}>
                <h5>2 Finished Works</h5>
              </Link>
              <div className={styles.profilebutton}>
                <Link to={"/"} className={styles.links}>
                  <button>Edit Profile</button>
                </Link>
                <Link to={"/"} className={styles.links}>
                  <button>Add Post</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.maininfo}>
          <div className={styles.title}>
            <h4>Available work</h4>
            
          </div>
          <div className={styles.prevWork}>
            <h3>Previous Work</h3>
            <div className={styles.innerwork}>
              <img src="work.png" alt="work"></img>
              <div className={styles.work}>
                <div className={styles.title}>
                  <h4>Work Title</h4>
                  <img src="fi-sr-pencil.svg" alt="" />
                </div>
                <div className={styles.infos}>
                  <h5>Date | Location</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimonsectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit </p>
                </div>
                <hr></hr>
                <div className={styles.infos}>
                  <h4 className={styles.title}>Review</h4>
                  <h5>Client's Name</h5>
                  <div className={styles.reviewstars}>
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.innerwork}>
              <img src="work.png" alt="work"></img>
              <div className={styles.work}>
                <div className={styles.title}>
                  <h4>Work Title</h4>
                  <img src="fi-sr-pencil.svg" alt="" />
                </div>
                <div className={styles.infos}>
                  <h5>Date | Location</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimonsectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit </p>
                </div>
                <hr></hr>
                <div className={styles.infos}>
                  <h4 className={styles.title}>Review</h4>
                  <h5>Client's Name</h5>
                  <div className={styles.reviewstars}>
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                    <img src="fi-ss-star.png" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
