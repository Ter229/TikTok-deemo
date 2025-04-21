import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import PauseIcon from "@mui/icons-material/Pause";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import Spinner from "../spinner/Spinner";

const Video = ({ videoId, url = "", width = "100%", height = "360px" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);

  const handleClick = () => {
    setIsPlaying((_prev) => !_prev);
    videoRef?.current?.parentElement.classList.toggle("playing", !isPlaying);
  };

  const handleProgress = ({ loaded, played }) => {
    if (!loaded) return;
    setProgress(played * 100);
  };
  return (
    <div className={`video-item ${isPlaying ? "playing" : ""}`} ref={videoRef}>
      {!isReady && (
        <div>
          <Spinner />
        </div>
      )}
      <Link to={`/video/${videoId}`}>
        <ReactPlayer
          playing={isPlaying}
          loop={true}
          url={url}
          width={width}
          height={height}
          onProgress={handleProgress}
          onReady={() => setIsReady(true)}
        />
      </Link>
      <div className="video-item__controls" onClick={handleClick}>
        {isPlaying ? <PauseIcon /> : <PlayCircleIcon />}
      </div>
      <div className="video-progress">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Video;
