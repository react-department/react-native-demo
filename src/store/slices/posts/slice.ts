import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsState: (state) => {
      return { ...state };
    },
  },
});

export const { setPostsState } = postsSlice.actions;

export default postsSlice.reducer;
