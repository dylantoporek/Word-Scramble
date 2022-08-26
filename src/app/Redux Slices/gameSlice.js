import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    word1: {
        letterArr: [],
        sent: false,
        score: 0,
        response: {}
    },
    word2: {
        letterArr: [],
        sent: false,
        score: 0,
        response: {}
    },
    word3: {
        letterArr: [],
        sent: false,
        score: 0,
        response: {}
    },
    word4: {
        letterArr: [],
        sent: false,
        score: 0,
        response: {}
    },
    word5: {
        letterArr: [],
        sent: false,
        score: 0,
        response: {}
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
      if(!state.word1.sent){
        state.word1.letterArr = [...state.word1.letterArr, action.payload]
      }
      else if(state.word1.sent && !state.word2.sent){
        state.word2.letterArr = [...state.word2.letterArr, action.payload]
        console.log('word1 was sent')
        
      }
      else if(state.word2.sent && !state.word3.sent){
        state.word3.letterArr = [...state.word3.letterArr, action.payload]
        console.log("word2 was sent")
        
      }
      else if(state.word3.sent && !state.word4.sent){
        state.word4.letterArr = [...state.word4.letterArr, action.payload]
        console.log("word3 was sent")
        
      }
      else if(state.word4.sent && !state.word5.sent){
        state.word5.letterArr = [...state.word5.letterArr, action.payload]
        
      }
      else if(state.word5.sent){
        console.log('word5 was sent')
      } 
    },
    formWordScore: (state, action) => {
      if(!state.word1.sent){
        state.word1.score += action.payload
      }
      else if(state.word1.sent && !state.word2.sent){
        state.word2.score += action.payload
        console.log('word1 was sent')
        
      }
      else if(state.word2.sent && !state.word3.sent){
        state.word3.score += action.payload
        console.log("word2 was sent")
        
      }
      else if(state.word3.sent && !state.word4.sent){
        state.word4.score += action.payload
        console.log("word3 was sent")
        
      }
      else if(state.word4.sent && !state.word5.sent){
        state.word5.score += action.payload
        
      }
      else if(state.word5.sent){
        console.log('word5 was sent')
      } 
    },
    editWord: (state, action) => {
      if(!state.word1.sent){
        state.word1.letterArr.splice(-1)
        state.word1.score -= action.payload
      }
      else if(state.word1.sent && !state.word2.sent){
        state.word2.letterArr.splice(-1)
        state.word2.score -= action.payload
        
      }
      else if(state.word2.sent && !state.word3.sent){
        state.word3.letterArr.splice(-1)
        state.word3.score -= action.payload
        
      }
      else if(state.word3.sent && !state.word4.sent){
        state.word4.letterArr.splice(-1)
        state.word4.score -= action.payload
        
      }
      else if(state.word4.sent && !state.word5.sent){
        state.word5.letterArr.splice(-1)
        state.word5.score -= action.payload
        
      }
      else if(state.word5.sent){
        console.log('word5 was sent')
      }
    },
    clearWord: (state) => {
      if(!state.word1.sent){
        state.word1.letterArr = []
        state.word1.score = 0
      }
      else if(state.word1.sent && !state.word2.sent){
        state.word2.letterArr = []
        state.word2.score = 0
        
      }
      else if(state.word2.sent && !state.word3.sent){
        state.word3.letterArr = []
        state.word3.score = 0
        
      }
      else if(state.word3.sent && !state.word4.sent){
        state.word4.letterArr = []
        state.word4.score = 0
        
      }
      else if(state.word4.sent && !state.word5.sent){
        state.word5.letterArr = []
        state.word5.score = 0
        
      }
      else if(state.word5.sent){
        console.log('word5 was sent')
      }
    },
    guess: (state) => {
      state.guessCount -= 1
    },
    gameOverCheck : (state) => {
      if (state.guessCount === 0){
        state.gameOver = true
      }
    },
    realWordProtocal: (state, action) => {
      state[action.payload].sent = true
    },
    recordResponse: (state, action) => {
      if(!state.word1.sent){
        state.word1.response = {...action.payload}
      }
      else if(state.word1.sent && !state.word2.sent){
        state.word2.response = {...action.payload}
      }
      else if(state.word2.sent && !state.word3.sent){
        state.word3.response = {...action.payload}
      }
      else if(state.word3.sent && !state.word4.sent){
        state.word4.response = {...action.payload}
      }
      else if(state.word4.sent && !state.word5.sent){
        state.word5.response = {...action.payload}
      }
      else if(state.word5.sent){
        console.log('word5 was sent')
      }
    }

    }
  });
  
  export const { formWord, guess, editWord, formWordScore, clearWord, realWordProtocal, gameOverCheck, recordResponse } = gameSlice.actions;
  
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