import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from './Redux Slices/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer
  },
});
