
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import advertsReducer from './features/adverts/advertsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    adverts: advertsReducer,
  },
});
