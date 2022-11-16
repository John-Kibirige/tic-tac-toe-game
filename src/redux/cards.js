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
  difficulty: '',
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
      st.players[1].playerTwo.name = action.payload.name;
      st.players[1].playerTwo.choice = action.payload.choice;
    },
    setDifficulty: (state, action) => {
      const st = state;
      st.difficulty = action.payload;
    },
    resetClickedCards: (state) => {
      const st = state;
      st.clickedCards = [];
    },
  },
});

export const {
  clickedCard,
  updatePlayerOne,
  updatePlayerTwo,
  setDifficulty,
  resetClickedCards,
} = cardSlice.actions;

export default cardSlice;
