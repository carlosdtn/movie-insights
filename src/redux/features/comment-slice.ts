import { comments } from "@/data/comments";
import { Comment } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState: Comment[] = comments;

if (typeof window !== "undefined") {
  const persistedFavoritesData = localStorage.getItem("commentsData");
  if (persistedFavoritesData) {
    initialState = JSON.parse(persistedFavoritesData) as Comment[];
  }
}
interface CommentState {
  id: number;
  author: string;
  comment: string;
  createdAt: number;
}

export const CommentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    setComment: (state, action: PayloadAction<CommentState>) => {
      const { id, ...review } = action.payload;
      const index = state.findIndex((comment) => comment.id === id);
      state[index].reviews.push({ ...review });
      localStorage.setItem("commentsData", JSON.stringify(state));
    },
  },
});

export const { setComment } = CommentSlice.actions;
export default CommentSlice.reducer;
