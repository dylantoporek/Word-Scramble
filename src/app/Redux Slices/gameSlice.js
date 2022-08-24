import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    word1: {
        letterArr: [],
        sent: false,
        score: 0
    },
    word2: {
        letterArr: [],
        sent: false,
        score: 0
    },
    word3: {
        letterArr: [],
        sent: false,
        score: 0
    },
    word4: {
        letterArr: [],
        sent: false,
        score: 0
    },
    word5: {
        letterArr: [],
        sent: false,
        score: 0
    },
    guessCount: 5,
    gameOver: false
  };
  
  
  export const gameSlice = createSlice({
    name: 'game',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    formWord1: (state, action) =>{
        state.word1.letterArr = [...state.word1.letterArr, action.payload]
    },
    editWord1: (state) => {
      state.word1.letterArr.splice(-1)
    },
      guess: (state) => {
        state.guessCount > 0 ? state.guessCount -= 1 : state.gameOver = true
        
      }
    }
  });
  
  export const { formWord1, guess, editWord1 } = gameSlice.actions;
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectWord1 = (state) => state.game.word1
  export const selectWord2 = (state) => state.game.word2
  export const selectWord3 = (state) => state.game.word3
  export const selectWord4 = (state) => state.game.word4
  export const selectWord5 = (state) => state.game.word5
  export const selectGameOver = (state) => state.game.gameOver
  export const selectGuessCount = (state) => state.game.guessCount

  
  // We can also write thunks by hand, which may contain both sync and async logic.
  // Here's an example of conditionally dispatching actions based on current state.
//   export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
  
  export default gameSlice.reducer;