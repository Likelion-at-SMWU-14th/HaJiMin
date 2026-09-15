import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/user";

export const useSignup = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(`${data.username}님 환영합니다.`);
    },
  });
};
