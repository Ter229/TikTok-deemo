import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/common";

const getUser = async (uniqueId) => {
  const response = await request({
    path: `user/info?unique_id=${uniqueId}`,
  });

  return response;
};

export const useUser = (uniqueId) => {
  const { data } = useQuery({
    queryKey: ["user", uniqueId],
    queryFn: () => getUser(uniqueId),
  });

  return { data: data?.data || {}, code: data?.code, error: data?.msg };
};
