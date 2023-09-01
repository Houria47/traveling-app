import React, { useEffect, useRef, useState } from "react";

import classes from "./VideoSlider.module.css";
import { videosList } from "../../assets/home-media";

const VideoSlider = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const timeoutRef = useRef(null);
  const changeVideoHandler = (index) => {
    setSelectedVideo(index);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSelectedVideo((prevState) =>
        prevState === videosList.length - 1 ? 0 : prevState + 1
      );
    }, 5000);
    return () => {
      resetTimeout();
    };
  }, [selectedVideo]);

  const controlers = videosList.map((el, index) => {
    const activeClass = selectedVideo === index ? classes.active : "";
    return (
      <li
        key={index}
        className={activeClass}
        onClick={changeVideoHandler.bind(null, index)}
      />
    );
  });

  return (
    <>
      <ul className={classes.controls}>{controlers}</ul>
      <div className={classes.videoContainer}>
        <video src={videosList[selectedVideo]} autoPlay muted loop />
      </div>
    </>
  );
};

export default VideoSlider;
