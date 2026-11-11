import { useQuery } from "@tanstack/react-query";
import { getComments } from "./comments.api";

export const useComments = (postId: Parameters<typeof getComments>[0]) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  });
};