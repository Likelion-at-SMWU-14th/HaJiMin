import { useQuery } from "@tanstack/react-query";
import { fetchMyPage } from "../api/user";

export const useMyPage = () => {
  return useQuery({
    queryKey: ["myPage"],
    queryFn: fetchMyPage,
  });
};
