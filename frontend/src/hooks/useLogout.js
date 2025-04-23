import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
export const useLogout = () => {
  const { clearToken } = useAuth();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: data => {
      toast.success(data?.message);
      clearToken();
    }
  });
};
