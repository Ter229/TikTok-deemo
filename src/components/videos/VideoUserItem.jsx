import React from "react";
import Video from "./Video";
import { PlayArrow } from "@mui/icons-material";
import { formatCompactNum } from "../../../utils/common";

const VideoUserItem = ({
  video_id: videoId,
  play,
  title,
  play_count: playCount,
}) => (
  <div>
    <Video videoId={videoId} url={play} />
    <div>
      <PlayArrow />
      <span>{formatCompactNum(playCount)}</span>
    </div>
    <div>{title}</div>
  </div>
);

export default VideoUserItem;
