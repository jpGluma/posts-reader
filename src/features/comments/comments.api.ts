import api from "@/lib/api";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const getComments = async (postId: Comment["postId"]) => {
  const res = await api.get<Comment[]>(
    `/posts/${postId}/comments`
  );

  return res.data;
};