import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsApi } from "../../api/newsApi/news.api";
import { NewsStateInterface } from "../../interfaces/newsState.interface";
import { NewsInterface } from "../../interfaces/news.interface";

const initialState: NewsStateInterface = {
  ids: [],
  news: [],
  newsById: {} as NewsInterface,
  params: [],
  isLoading: false,
  error: "",
};

export const fetchNews = createAsyncThunk("fetch/news", async () => {
  const top = await NewsApi.getNews().then((res: number[]) => res.slice(0, 100));
  const topStories = await Promise.all(
    top?.map(async (id: number) => {
      const response = await NewsApi.getNewsById(id);
      return response;
    }),
  );
  return topStories;
});

export const fetchNewsById = createAsyncThunk("fetch/newsById", async (newsId: number) => {
  const response = await NewsApi.getNewsById(newsId);
  return response;
});


export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.news = payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while loading ids!";
      })

      .addCase(fetchNewsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.newsById = payload;
        state.params.push(payload.id)
      })
      .addCase(fetchNewsById.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while loading news!";
      });
  },
});

export default newsSlice.reducer;
