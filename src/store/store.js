import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../store/slices/PostsSlice';
import authReducer from './slices/AppSlice';
import countReducer from './slices/CountSlice';


const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    count: countReducer
  },
});

export default store