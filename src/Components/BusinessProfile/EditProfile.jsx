import React, { useState, useEffect } from "react";
import styles from "../BusinessProfile/EditProfile.module.css"
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState("");
  const [businessName] = useState("Business Name");
  const [initials, setInitials] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    const nameParts = businessName.split(" ");
    const initials = nameParts.map(part => part[0].toUpperCase()).join("");
    setInitials(initials);
  }, [businessName]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function () {
        if (img.width < 129 || img.height < 128) {
          setErrorMessage("Image is too small, try another one."); 
        } else {
          setProfileImage(imageUrl); 
          setErrorMessage("");
        }
      };
      img.src = imageUrl;
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageUpload").click();
  };
  const handleCloseError = () => {
    setErrorMessage("");
  };

  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <div className={styles.imageWrapper}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                className={styles.imageprofile}
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <div
                className={styles.initialsPlaceholder}
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
              >
                {initials}
              </div>
            )}
            <input
              type="file"
              id="imageUpload"
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          {errorMessage && (
            <div className={styles.errorMessage}>
              <span>{errorMessage}</span>
              <button className={styles.closeButton} onClick={handleCloseError}>
                &times;
              </button>
            </div>
          )}

          <div className={styles.profileinfo}>
            <h3>{businessName}</h3>
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
          <form className={styles.editbusiness}>
            <div className={styles.inputs}>
            </div>
          </form>
      </div>
    </>
  );
};

export default EditProfile;
