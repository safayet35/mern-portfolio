import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendMessage } from "../api/api.js";
const useContact = () => {
  return useMutation({
    mutationFn: sendMessage,
    onSuccess: data => {
      toast.success(data.message);
    },
    onError: error => {
      console.log(error);
      toast.error(error?.message);
    }
  });
};

export default useContact ;
