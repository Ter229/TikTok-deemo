import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIconIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/Bookmark";
import { formatCompactNum } from "../../../utils/common";

const VideoDitails = ({
  play_count: playCount,
  digg_count: diggCount,
  comment_count: commentCount,
  share_count: shareCount,
}) => {
  const details = [
    {
      icon: <PlayArrowIcon />,
      count: playCount,
    },
    {
      icon: <ChatBubbleIcon />,
      count: commentCount,
    },
    {
      icon: <ShareIconIcon />,
      count: shareCount,
    },
    {
      icon: <FavoriteIcon />,
      count: diggCount,
    },
  ];

  return (
    <ul className="video-details flex">
      {details.map(({ icon, count }, i) => (
        <li key={i} className="video-details__item">
          {icon}
          <p>{formatCompactNum(count)}</p>
        </li>
      ))}
    </ul>
  );
};

export default VideoDitails;
