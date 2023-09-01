import React, { useState } from "react";
import classes from "./ImageInput.module.css";
import defaultUserImg from "./../../../../assets/default-user.png";
import Button from "../../../../components/UI/Button";

const ImageInput = ({ controlers }) => {
  const { setFieldValue } = controlers;
  const [uplaodedImg, setUplaodedImg] = useState(null);

  const onImageChangeHandler = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          setFieldValue("image", fileReader.result);
          setUplaodedImg(fileReader.result);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const clearImgHandler = () => {
    setUplaodedImg(null);
    setFieldValue("image", "");
  };
  return (
    <div className={classes.imgInput}>
      <div className={classes.imgBox}>
        <img src={uplaodedImg || defaultUserImg} alt="" />
      </div>
      <label className="primary-btn" htmlFor="image">
        Choose Picture
        <input
          hidden
          id="image"
          type="file"
          name="image"
          onChange={onImageChangeHandler}
        />
      </label>
      <Button
        type="button"
        onClick={clearImgHandler}
        className={classes.cancelBtn}
      >
        Clear Image
      </Button>
    </div>
  );
};

export default ImageInput;
