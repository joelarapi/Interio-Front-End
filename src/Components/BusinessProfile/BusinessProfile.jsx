import React from "react";
import styles from "../BusinessProfile/BusinessProfile.module.css"
import { Link } from "react-router-dom";

const BusinessProfile = () => {
  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <img src="pexels-edmond-dantes-4347366 1.png" alt="profile" className={styles.imageprofile}></img>
          <div className={styles.profileinfo}>
            <h3>Business Name</h3>
            <div className={styles.innerinfo}>
              <div className={styles.starsprofiles}>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
                <img src="fi-ss-star.png"></img>
              </div>
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
                <Link to={"/editprofile"} className={styles.links}>
                  <button type="button">Edit Profile</button>
                </Link>
                <Link to={"/"} className={styles.links}>
                  <button type="button">Promote Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.maininfo}>
          <div className={styles.aboutbusiness}>
            <h3>About Business</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, delit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className={styles.innercontainer}>
            <h3>Portfolio</h3>
            <div className={styles.portfoliomedia}>
              <div className={styles.swipermedia}>
                <img src="media1.png"></img>
                <img src="media2.png"></img>
                <img src="media3.png"></img>
              </div>
            </div>
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

export default BusinessProfile;
