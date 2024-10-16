import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: true,
    currentPage: 1,
    feedback: { name: '', email: '', message: '' },
  },
  reducers: {
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
    resetFeedback: (state) => {
      state.feedback = { name: '', email: '', message: '' };
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      });
  },
});

export const { removePost, setFeedback, resetFeedback, changePage } = postsSlice.actions;

export default postsSlice.reducer;
