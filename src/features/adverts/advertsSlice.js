// src/features/adverts/advertsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchAdverts = createAsyncThunk('adverts/fetchAdverts', async () => {
  const response = await axios.get(`${apiUrl}/v1/adverts`);
  return response.data;
});

export const fetchTags = createAsyncThunk('adverts/fetchTags', async () => {
  const response = await axios.get(`${apiUrl}/v1/adverts/tags`);
  return response.data;
});

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    tags: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
      });
  },
});

export default advertsSlice.reducer;
