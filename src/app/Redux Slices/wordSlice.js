import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    word: 'abandon',
    points: {
        a: 1,
        b: 3,
        c: 3,
        d: 2,
        e: 1,
        f: 4,
        g: 2,
        h: 4,
        i: 1,
        j: 8,
        k: 5,
        l: 1,
        m: 3,
        n: 1,
        o: 1,
        p: 3,
        q: 10,
        r: 1,
        s: 1,
        t: 1,
        u: 1,
        v: 4,
        w: 4,
        x: 8,
        y: 4,
        z: 10,
    },
  };
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array
  }
  
  export const wordSlice = createSlice({
    name: 'words',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    //   scrambleWord: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     let wordArr = state.word.split('')
    //     state.scramble = shuffle(wordArr)
    //   }
    }
  });
  
  export const {  } = wordSlice.actions;
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectWord = (state) => state.word
  export const selectScramble = (state) => state.scramble
  export const selectPoints = (state) => state.points
  
  // We can also write thunks by hand, which may contain both sync and async logic.
  // Here's an example of conditionally dispatching actions based on current state.
//   export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
export default wordSlice.reducer;