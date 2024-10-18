import React from "react";
import styles from "./BusinessProfile.module.css";

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
              <h5>Category</h5>
              <h5>Location</h5>
              <h5>14 Clients</h5>
            </div>
          </div>
        </div>
        <div className={styles.maininfo}>
          <div className={styles.innercontainer}>
            <h3>Portfolio</h3>
            <div className={styles.portfoliomedia}>
              <img src="media1.png"></img>
              <img src="media2.png"></img>
              <img src="media3.png"></img>
            </div>
          </div>
          <div className={styles.innercontainer}>
            <h3>Reviews</h3>
            <div className={styles.reviews}>
              <div className={styles.innerreview}>
                <img src="Group 4.png"></img>
                <div className={styles.reviewinfo}>
                  <h4>Client's Name</h4>
                  {/* <div className={styles.stars}>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                  </div> */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                  <h5>Location | dd/mm/yyyy</h5>
                </div>
              </div>
            </div>
            <div className={styles.reviews}>
              <div className={styles.innerreview}>
                <img src="Group 4.png"></img>
                <div className={styles.reviewinfo}>
                  <h4>Client's Name</h4>
                  {/* <div className={styles.stars}>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                    <img src="fi-ss-star.png" id="star"></img>
                  </div> */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                  <h5>Location | dd/mm/yyyy</h5>
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
