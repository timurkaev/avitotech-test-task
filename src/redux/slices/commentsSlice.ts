import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsApi } from "../../api/newsApi/news.api";
import { CommentsStateInterface } from "../../interfaces/commentsState.interface";

const initialState: CommentsStateInterface = {
  comments: [],
  commentsLoading: false,
  error: "",
};

export const fetchComments = createAsyncThunk("fetch/newsComments", async (id: number) => {
  const response = await NewsApi.getNewsById(id);
  const comments = await Promise.all(
    response?.kids.map(async (kid: number) => {
      const response = await NewsApi.getNewsById(kid);
      return response;
    }),
  );
  return comments;
});

export const commentsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.commentsLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, { payload }) => {
        state.commentsLoading = false;
        state.comments = payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.commentsLoading = false;
        state.error = "An error occurred while loading comments!";
      });
  },
});

export default commentsSlice.reducer;
