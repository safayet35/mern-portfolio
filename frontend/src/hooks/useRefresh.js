import { useMutation } from "@tanstack/react-query";
import { refreshToken } from "../api/api.js";

export const useRefresh = () => {
  return useMutation({
    mutationFn: refreshToken,
    onSuccess: data => {
      console.log("New access token received:", data);
    },
    onError: error => {
      console.error("Error during refresh:", error);
    }
  });
};
