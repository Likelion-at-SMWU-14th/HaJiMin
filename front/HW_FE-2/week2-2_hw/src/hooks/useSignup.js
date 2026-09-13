import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/signup";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(`${data}환영합니다, ${data}!`);
    },
  });
};
