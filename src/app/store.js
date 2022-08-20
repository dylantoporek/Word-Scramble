import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from './Redux Slices/themeSlice'
import wordReducer from './Redux Slices/wordSlice'
import gameReducer from './Redux Slices/gameSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    word: wordReducer,
    game: gameReducer,
  },
});
