import UserLiked from "../src/components/app/user/UserLiked";
import UserVideos from "../src/components/app/user/UserVideos";

export const REGION = "JP";
export const USER_TABS = [
  {
    slug: "videos",
    title: "Videos",
    content: UserVideos,
  },
  {
    slug: "liked",
    title: "Liked",
    content: UserLiked,
  },
];
