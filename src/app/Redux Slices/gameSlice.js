import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    word1: {
        letterArr: [],
        sent: true,
        score: 0
    },
    word2: {
        letterArr: [],
        sent: true,
        score: 0
    },
    word3: {
        letterArr: [],
        sent: true,
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
    formWord1: (state, action) => {
      if (state.word1.sent){
        state.word2.letterArr = [...state.word2.letterArr, action.payload]
        console.log('word1 was sent')
        if (state.word2.sent){
          state.word3.letterArr = [...state.word3.letterArr, action.payload]
          console.log("word2 was sent")
          if (state.word3.sent){
            state.word4.letterArr = [...state.word4.letterArr, action.payload]
            console.log("word3 was sent")
            if (state.word4.sent){
              state.word5.letterArr = [...state.word5.letterArr, action.payload]
              if (state.word5.sent){
                console.log('word5 was sent')
              }
            }
          }
        }
      }
      state.word1.letterArr = [...state.word1.letterArr, action.payload]
    },
    formWord1Score: (state, action) => {
      state.word1.score += action.payload 
    },
    editWord1: (state, action) => {
      state.word1.letterArr.splice(-1)
      state.word1.score -= action.payload
    },
    clearWord1: (state) => {
      state.word1.letterArr = []
      state.word1.score = 0
    },
      guess: (state) => {
        state.guessCount > 0 ? state.guessCount -= 1 : state.gameOver = true
        
      }
    }
  });
  
  export const { formWord1, guess, editWord1, formWord1Score, clearWord1 } = gameSlice.actions;
  
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