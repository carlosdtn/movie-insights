import { Comment } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommentState {
  id: number;
  author: string;
  comment: string;
  createdAt: number;
}

export const CommentSlice = createSlice({
  name: "comments",
  initialState: localStorage.getItem("commentsData")
    ? (JSON.parse(localStorage.getItem("commentsData") || "null") as Comment[])
    : [],
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
