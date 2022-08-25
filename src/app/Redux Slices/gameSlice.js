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
    formWord: (state, action) => {
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
      } else {
        state.word1.letterArr = [...state.word1.letterArr, action.payload]
      }
      
    },
    formWordScore: (state, action) => {
      if (state.word1.sent){
        state.word2.score += action.payload 
        console.log('word1 was sent')
        if (state.word2.sent){
          state.word3.score += action.payload 
          console.log("word2 was sent")
          if (state.word3.sent){
            state.word4.score += action.payload 
            console.log("word3 was sent")
            if (state.word4.sent){
              state.word5.score += action.payload 
              if (state.word5.sent){
                console.log('word5 was sent')
              }
            }
          }
        }
      }
      else{
        state.word1.score += action.payload 
      }
      
    },
    editWord: (state, action) => {
      if (state.word1.sent){
        state.word2.letterArr.splice(-1)
        state.word2.score -= action.payload
        console.log('word1 was sent')
        if (state.word2.sent){
          state.word3.letterArr.splice(-1)
          state.word3.score -= action.payload
          console.log("word2 was sent")
          if (state.word3.sent){
            state.word4.letterArr.splice(-1)
            state.word4.score -= action.payload
            console.log("word3 was sent")
            if (state.word4.sent){
              state.word5.letterArr.splice(-1)
              state.word5.score -= action.payload
              if (state.word5.sent){
                console.log('word5 was sent')
              }
            }
          }
        }
      } else{
        state.word1.letterArr.splice(-1)
        state.word1.score -= action.payload
      }
      
    },
    clearWord: (state) => {
      if (state.word1.sent){
        state.word2.letterArr = []
        state.word2.score = 0 
        console.log('word1 was sent')
        if (state.word2.sent){
          state.word3.letterArr = []
          state.word3.score = 0
          console.log("word2 was sent")
          if (state.word3.sent){
            state.word4.letterArr = []
            state.word4.score = 0
            console.log("word3 was sent")
            if (state.word4.sent){
              state.word5.letterArr = []
              state.word5.score = 0 
              if (state.word5.sent){
                console.log('word5 was sent')
              }
            }
          }
        }
      }
      else{
        state.word1.letterArr = []
        state.word1.score = 0
      }
      
    },
    guess: (state) => {
      state.guessCount > 0 ? state.guessCount -= 1 : state.gameOver = true 
    },
    realWordProtocal: (state) => {
      if (state.word1.sent){
        
        console.log('word1 was sent')
        state.word1.sent = true
        state.word2.sent = true
        state.word3.sent = false
        state.word4.sent = false
        state.word5.sent = false

        
      }
      if (state.word2.sent){

        console.log("word2 was sent")
        state.word1.sent = true
        state.word2.sent = true
        state.word3.sent = true
        state.word4.sent = false
        state.word5.sent = false

        
      }
      if (state.word3.sent){

        console.log("word3 was sent")
        state.word1.sent = true
        state.word2.sent = true
        state.word3.sent = true
        state.word4.sent = true
        state.word5.sent = false

        
      }
      if (state.word4.sent){

        console.log('word4 was sent')
        state.word1.sent = true
        state.word2.sent = true
        state.word3.sent = true
        state.word4.sent = true
        state.word5.sent = true

      }
      else{
        state.word1.sent = true
        state.word2.sent = false
        state.word3.sent = false
        state.word4.sent = false
        state.word5.sent = false
      }
      
    }

    }
  });
  
  export const { formWord, guess, editWord, formWordScore, clearWord, realWordProtocal } = gameSlice.actions;
  
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