import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/user";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myPage"] });
      console.log("회원 정보가 삭제되었습니다.");
    },
  });
};
