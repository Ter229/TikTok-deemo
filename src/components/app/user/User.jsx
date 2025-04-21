import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import { Alert } from "@mui/material";
import Spinner from "../../spinner/Spinner";
import { formatCompactNum } from "../../../../utils/common";
import LockIcon from "@mui/icons-material/Lock";

export const User = () => {
  const { uniqueId } = useParams();
  const { data, code, error, isLoading } = useUser(uniqueId);

  if (code === -1) {
    return <Alert>{error || "User doesnt exist"}</Alert>;
  }

  if (isLoading) return <Spinner />;

  const {
    stats: { followingCount, followerCount, heartCount, videoCount },
    user: { avatarMedium, nickname, privateAccount, openFavorite },
  } = data;

  const statsData = [
    {
      text: "Following",
      count: followingCount,
    },
    {
      text: "Followers",
      count: followerCount,
    },
    {
      text: "Likes",
      count: heartCount,
    },
    {
      text: "Videos",
      count: videoCount,
    },
  ];
  return (
    <div>
      <div>
        <div style={{ backgroundImage: `url(${avatarMedium})` }} />
      </div>
      <div>
        <div>
          <div>{uniqueId}</div>
        </div>
        <div>
          <div>{nickname}</div>
        </div>
        <ul>
          {statsData.map(({ text, count }) => (
            <li key={text}>
              <span>{formatCompactNum(count)}</span>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      {!privateAccount ? (
        <UserTabs openFavorite={openFavorite} />
      ) : (
        <p>
          <span>This account is private</span>
          <LockIcon />
        </p>
      )}
    </div>
  );
};
