import { useQuery } from "@tanstack/react-query";
import { fetchMyPage } from "../api/user";

export const useMyPage = (userId) => {
  return useQuery({
    queryKey: ["myPage", userId],
    queryFn: () => fetchMyPage(userId),
    staleTime: 30 * 1000,
    retry: 3,
  });
};
