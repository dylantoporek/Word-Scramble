import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from './Redux Slices/themeSlice'
import wordReducer from './Redux Slices/wordSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    word: wordReducer,
  },
});
