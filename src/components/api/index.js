import { request } from "../../../utils/common";

export const fetchUserPost = async ({ uniqueId, cursor }) => {
  const path = `user/posts?unique_id=${uniqueId}&count=10&cursor=${cursor}`;
  const response = await request({
    path,
  });

  return response;
};
