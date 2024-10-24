import React from "react";
import styles from "../BusinessView/BusinessView.module.css";

const BusinessView = () => {
  return (
    <>
      <div className={styles.businessView}>
        <div className={styles.requestsBar}>
          <h4>Similar requests you might like</h4>
          <div className={styles.requestGray}>
            <div className={styles.requestContainer}>
              <img src="businessview.png" alt="" />
              <div className={styles.descriptionBusiness}>
                <h3>Request Title</h3>
                <h4>9 hours | Category</h4>
                <h5>Location</h5>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum sit amet...</p>
              </div>
            </div>
          </div>
          <div className={styles.requestWhite}>
            <div className={styles.requestContainer}>
              <img src="businessview.png" alt="" />
              <div className={styles.descriptionBusiness}>
                <h3>Request Title</h3>
                <h4>9 hours | Category</h4>
                <h5>Location</h5>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum sit amet...</p>
              </div>
            </div>
          </div>
          <div className={styles.requestGray}>
            <div className={styles.requestContainer}>
              <img src="businessview.png" alt="" />
              <div className={styles.descriptionBusiness}>
                <h3>Request Title</h3>
                <h4>9 hours | Category</h4>
                <h5>Location</h5>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum sit amet...</p>
              </div>
            </div>
          </div>
          <div className={styles.requestWhite}>
            <div className={styles.requestContainer}>
              <img src="businessview.png" alt="" />
              <div className={styles.descriptionBusiness}>
                <h3>Request Title</h3>
                <h4>9 hours | Category</h4>
                <h5>Location</h5>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum sit amet...</p>
              </div>
            </div>
          </div>
          <div className={styles.requestGray}>
            <div className={styles.requestContainer}>
              <img src="businessview.png" alt="" />
              <div className={styles.descriptionBusiness}>
                <h3>Request Title</h3>
                <h4>9 hours | Category</h4>
                <h5>Location</h5>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum sit amet...</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clientPost}>
          <h2>Client’s Post Tittle</h2>
          <h4>Location, AL </h4>
          <div className={styles.categoryBtn}>
            <button type="text">Category</button>
            <button type="text">Category</button>
            <button type="text">Category</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore
          </p>
          <img src="clientpost.png" alt="" />
          <div className={styles.morePosts}>
            <img src="postss.png"></img>
            <img src="postss.png"></img>
            <img src="postss.png"></img>
            <img src="postss.png"></img>
            <div className={styles.most3}>
            </div>
          </div>
          <button className={styles.offerBtn}>Make an offer</button>
        </div>
      </div>
    </>
  );
};

export default BusinessView;
