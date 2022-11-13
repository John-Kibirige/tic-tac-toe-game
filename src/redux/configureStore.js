import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './cards';

const store = configureStore({
  reducer: {
    clickedCards: cardSlice.reducer,
  },
});

export default store;
