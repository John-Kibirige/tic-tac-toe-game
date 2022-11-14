import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clickedCards: [],
  players: [
    {
      playerOne: {
        name: 'you',
        choice: '',
      },
    },
    {
      playerTwo: {
        name: '',
        choice: '',
      },
    },
  ],
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

    updatePlayerOne: (state, action) => {
      const st = state;
      st.players[0].playerOne.choice = action.payload;
    },
    updatePlayerTwo: (state, action) => {
      const st = state;
      st.players[1].playerTwo.choice = action.payload;
    },
  },
});

export const { clickedCard } = cardSlice.actions;

export default cardSlice;
