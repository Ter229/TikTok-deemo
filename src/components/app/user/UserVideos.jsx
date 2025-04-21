import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPost } from "../../api";
import Spinner from "../../spinner/Spinner";
import VideoUserItem from "../../videos/VideoUserItem";

const UserVideos = () => {
  const { uniqueId } = useParams();

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["userPosts", uniqueId],
    queryFn: () => fetchUserPost({ uniqueId, cursor: 0 }),
    keepPreviousData: true,
  });

  if (isLoading) return <Spinner />;

  if (isError) return "Error";

  const {
    data: { videos, hasMore, cursor: next },
  } = data;
  return (
    <div>
      {videos.map((video) => (
        <VideoUserItem key={video.video_id} {...video} />
      ))}
    </div>
  );
};

export default UserVideos;
