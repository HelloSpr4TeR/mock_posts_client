import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PostService from '../../API/PostService';
import { getPageCount } from '../../utils/pages';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ limit, page }, thunkAPI) => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers['x-total-count'];
    return {
      posts: response.data,
      totalPages: getPageCount(totalCount, limit),
    };
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    filter: { sort: '', query: '' },
    modal: false,
    totalPages: 0,
    limit: 10,
    page: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    createPost(state, action) {
      state.posts.push(action.payload);
      state.modal = false;
    },
    removePost(state, action) {
      state.posts = state.posts.filter(p => p.id !== action.payload.id);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [...state.posts, ...action.payload.posts];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  createPost,
  removePost,
  setFilter,
  setModal,
  setLimit,
  setPage,
} = postsSlice.actions;

export default postsSlice.reducer;