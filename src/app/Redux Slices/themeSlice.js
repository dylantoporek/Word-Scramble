import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'light'
  };
  
  
  export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      toggle: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        if(state.value === 'light'){
            state.value = 'dark'
        } else {
            state.value = 'light'
        }
      }
    }
  });
  
  export const { toggle } = themeSlice.actions;
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectTheme = (state) => state.theme.value
  
  // We can also write thunks by hand, which may contain both sync and async logic.
  // Here's an example of conditionally dispatching actions based on current state.
//   export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
  
  export default themeSlice.reducer;