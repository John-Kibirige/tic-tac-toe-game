import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clickedCards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    clickedCard: (state, action) => {
      const st = state;
      if (!st.clickedCards.includes(action.payload)) {
        st.clickedCards.push(action.payload);
      }
    },
  },
});

export const { clickedCard } = cardSlice.actions;
export default cardSlice;
