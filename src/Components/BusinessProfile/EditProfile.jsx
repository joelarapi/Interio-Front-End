import React, { useState, useEffect } from "react";
import styles from "../BusinessProfile/EditProfile.module.css";
import { Link, useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  const [profileImage, setProfileImage] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [initials, setInitials] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (businessName) {
      const nameParts = businessName.split(" ");
      const initials = nameParts.map((part) => part[0].toUpperCase()).join("");
      setInitials(initials);
    } else {
      setInitials("");
    }
  }, [businessName]);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch(`https://akvct836lc.execute-api.eu-central-1.amazonaws.com/dev/business/${id}`);
        const data = await response.json();
        setBusinessName(data.businessName);
        setCategory(data.category);
        setLocation(data.location);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching business data:", error);
      }
    };

    fetchBusinessData();
  }, [id]);

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

  const handleSave = async () => {
    const updatedBusiness = {
      businessName,
      category,
      location,
      email,
    };

    try {
      const response = await fetch(`https://akvct836lc.execute-api.eu-central-1.amazonaws.com/dev/business/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBusiness),
      });

      if (!response.ok) {
        throw new Error("Failed to update business profile");
      }

      // Optionally redirect or show a success message
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating business profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.profilemain}>
        <div className={styles.profilebar}>
          <div className={styles.imageWrapper}>
            {profileImage ? (
              <img src={profileImage} alt="profile" className={styles.imageprofile} onClick={handleImageClick} style={{ cursor: "pointer" }} />
            ) : (
              <div className={styles.initialsPlaceholder} onClick={handleImageClick} style={{ cursor: "pointer" }}>
                {initials}
              </div>
            )}
            <input type="file" id="imageUpload" accept="image/png, image/jpeg" style={{ display: "none" }} onChange={handleImageChange} />
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
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label className="businessName">Business Name</label>
            <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business Name" />
          </div>
          <div className={styles.formGroup}>
            <label className="category">Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
          </div>
          <div className={styles.formGroup}>
            <label className="location">Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
          </div>
          <div className={styles.formGroup}>
            <label className="email">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" />
          </div>
        </form>
        <div className={styles.portfolio}>
          <h4>Portfolio</h4>
          <div className={styles.portfolioGroup}>
            <img src="Frame 106.png" alt="" />
            <img src="Frame 106.png" alt="" />
            <img src="Frame 106.png" alt="" />
          </div>
        </div>
        <Link to={"/businesspage"}>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button> 
        </Link>
      </div>
    </>
  );
};

export default EditProfile;
