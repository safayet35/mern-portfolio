import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getProjects, postProjects, deleteProjects } from "../api/api.js";

const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects
  });
};

const usePostProjects = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postProjects,
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: error => {
      console.log(error?.response);
      toast.error(error?.response?.data.message);
    }
  });
};

const useDeleteProjects = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProjects,
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: error => {
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  });
};

export { useGetProjects, usePostProjects, useDeleteProjects };
