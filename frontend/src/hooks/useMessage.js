import { useQuery } from "@tanstack/react-query";
import { getMessage } from "../api/api.js";

const useMessage = () => {
  return useQuery({
    queryKey: ["messages"],
    queryFn: getMessage
  });
};

export default useMessage;
