import React, { useState } from "react";
import styles from "../BusinessProfile/BusinessProfile.module.css";
import { Link } from "react-router-dom";

const BusinessProfile = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  
  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <img src="pexels-edmond-dantes-4347366 1.png" alt="profile" className={styles.imageprofile} />
          <div className={styles.profileinfo}>
            <h3>Business Name</h3>
            <div className={styles.innerinfo}>
              <div className={styles.starsprofiles}>
                <img src="fi-ss-star.png" alt="star" />
                <img src="fi-ss-star.png" alt="star" />
                <img src="fi-ss-star.png" alt="star" />
                <img src="fi-ss-star.png" alt="star" />
                <img src="fi-ss-star.png" alt="star" />
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
                  <button type="button">Create ad</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.maininfo}>
          <div className={styles.aboutbusiness}>
            <h3>About Business</h3>
          </div>
          <div className={styles.aboutinfo}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.businesstabs}>
            <div className={`${styles.tab1} ${activeTab === "portfolio" ? styles.activeTab : ""}`} onClick={() => setActiveTab("portfolio")}>
              <h3>Portfolio</h3>
            </div>
            <div className={`${styles.tab2} ${activeTab === "ads" ? styles.activeTab : ""}`} onClick={() => setActiveTab("ads")}>
              <h3>Ads</h3>
            </div>
          </div>
          {activeTab === "portfolio" && (
            <div className={styles.innercontainer}>
              <h3>Portfolio</h3>
              <div className={styles.portfoliomedia}>
                <div className={styles.swipermedia}>
                  <div className={styles.addmedia}>
                    <div className={styles.insidemedia}>
                      <img src="Vector (8).svg" alt="add" />
                      <p>Add Catalogue</p>
                    </div>
                  </div>
                  <img src="kitchen.png" alt="portfolio" />
                  <img src="kitchen.png" alt="portfolio" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "ads" && (
            <div className={styles.innercontainer}>
              <h3>Ads</h3>
              <div className={styles.portfoliomedia}>
                <div className={styles.swipermedia}>
                  <div className={styles.addmedia}>
                    <div className={styles.insidemedia}>
                      <img src="Vector (8).svg" alt="add" />
                      <p>Add Ads</p>
                    </div>
                  </div>
                  {/* <img src="/src/Components/Dashboard/sponsored-icons/sponsor-1.png" alt="" />
                        <img src="/src/Components/Dashboard/sponsored-icons/sponsor-2.png" alt="" />
                        <img src="/src/Components/Dashboard/sponsored-icons/sponsor-3.png" alt="" /> */}
                </div>
              </div>
            </div>
          )}

          <div className={styles.prevWork}>
            <h3>Previous Work (3)</h3>
            <div className={styles.workImg}>
              <img src="work.png" alt="work"></img>
              <img src="work.png" alt="work"></img>
              <img src="work.png" alt="work"></img>
              <img src="work.png" alt="work"></img>
            </div>
            <div className={styles.work}>
              <div className={styles.title}>
                <h4>Work Title</h4>
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
            <hr />
            <h6>read more</h6>
            <div className={styles.workImg}>
              <img src="work.png" alt="work"></img>
              <img src="work.png" alt="work"></img>
              <img src="work.png" alt="work"></img>
              <img src="work.png" alt="work"></img>
            </div>
            <div className={styles.work}>
              <div className={styles.title}>
                <h4>Work Title</h4>
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
            <hr />
            <h6>read more</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;
