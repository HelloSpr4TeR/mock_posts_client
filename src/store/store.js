import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../store/slices/PostsSlice';
import authReducer from './slices/AppSlice';
import countReducer from './slices/CountSlice';
import { userApi } from '../API/api';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    count: countReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;