import React from "react";
import styles from "../BusinessView/BusinessView.module.css";

const BusinessView = () => {
  <>
    <div className={styles.requestsBar}>
      <h4>Similar requests you might like</h4>
      <div className={styles.requestGray}>
        <div className={styles.requestContainer}>
          <img src="businessview.png" alt="" />
          <h3>Request Title</h3>
          <h4>9 hours | Categoory</h4>
          <h5>Location</h5>
          <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum sit amet...</p>
        </div>
      </div>
    </div>
  </>;
};

export default BusinessView;
