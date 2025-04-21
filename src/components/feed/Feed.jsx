import { MusicNote } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import { useFeed } from "../../hooks/useFeed";

import VideoUser from "../videos/VideoUser";
import VideoDitails from "../videos/VideoDitails";
import Spinner from "../spinner/Spinner";
import Video from "../videos/Video";

const Feed = () => {
  const { data: feed, isLoading } = useFeed();

  return !isLoading ? (
    <div className="feed">
      {feed.map(
        ({
          title,
          play,
          author,
          video_id: videoId,
          music_info: { title: songTitle },
          ...rest
        }) => {
          return (
            <div className="video" key={videoId}>
              <VideoUser {...author} />
              <div className="video-wrapper">
                <Video url={play} videoId={videoId} />
                <VideoDitails {...rest} />
              </div>
              <div className="video-music flex">
                <span>Original:</span>
                <MusicNote />
                <p className="video-music__title">{songTitle}</p>
              </div>
              <div className="video-title">{title}</div>
            </div>
          );
        }
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default Feed;
