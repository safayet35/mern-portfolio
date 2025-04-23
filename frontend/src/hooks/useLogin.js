import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { loginUser } from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: data => {
      console.log("login success", data.data);
      toast.success("Login successfully");
      navigate("/dashboard");
    },
    onError: error => {
      toast.error(error?.response?.data?.message);
      console.log(error.response);
    }
  });
};

export default useLogin;
