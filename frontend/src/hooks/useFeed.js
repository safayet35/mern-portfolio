import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getFeed, postFeed, deleteFeed, updateFeed } from "../api/api.js";
import toast from "react-hot-toast";
const useGetFeed = () => {
  return useQuery({
    queryKey: ["feed"],
    queryFn: getFeed
  });
};

const usePostFeed = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postFeed,
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
    onError: error => {
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  });
};

const useDeleteFeed = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFeed,
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
    onError: error => {
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  });
};

const useUpdateFeed = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateFeed,
    onSuccess: data => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
    onError: error => {
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  });
};

export { useGetFeed, useDeleteFeed, usePostFeed, useUpdateFeed };
