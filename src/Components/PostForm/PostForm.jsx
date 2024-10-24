import classes from "./PostForm.module.css";
import imageInput from '../../icons/image-input-icon.png'
import { useEffect, useRef, useState } from "react";
const PostForm = () => {

  useEffect
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // Handle the uploaded files
      console.log(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.modalForm} onSubmit={handleSubmit}>

      <div className={classes.formGroup}>
        <h3>Add Post</h3>
        <div className={classes.inputField}>
          <input type="text" placeholder=" " />
          <label htmlFor="title">Title</label>
        </div>

        <div className={classes.inputField}>
          <input type="text" placeholder=" " />
          <label htmlFor="title">Description</label>
        </div>

        <div className={classes.imageSection}>
      <label>Add images to describe your request</label>
      <div 
        className={`${classes.imageInput} ${dragActive ? classes.dragActive : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input 
          ref={inputRef}
          type="file" 
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleChange}
        />
        <img src={imageInput} alt="Upload" />
        <p>Drag and drop your images here, or click to browse</p>
        <p className={classes.supportedFormats}>Supported formats: jpg, jpeg, png</p>
      </div>
    </div>
      </div>

      <div className={classes.formGroup}>
        <label>Category</label>
        <select>
          <option value="">Select a category</option>
          {/* Add your categories */}
        </select>
      </div>

      <div className={classes.formGroup}>
        <label>Location</label>
        <input type="text" placeholder="Enter location" />
      </div>

      <div className={classes.modalActions}>
        <button type="button" className={classes.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={classes.submitButton}>
          Create Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
