import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../scripts/storage';
import { originalState } from '../scripts/originalState';

const initialState = loadState() || originalState;

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    clickedCard: (state, { payload }) => {
      const st = state;
      const condition = st.clickedCards.some((obj) => obj.id === payload.id);
      if (condition === false) {
        st.clickedCards.push(payload);
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
    updateWinnerCount: (state, { payload }) => {
      const st = state;

      st.winnerCount = {
        ...st.winnerCount,
        [payload]: st.winnerCount[`${payload}`] + 1,
      };
    },
    resetWinnerCount: (state) => {
      const st = state;
      st.winnerCount = {
        tie: 0,
        you: 0,
        cpu: 0,
        'player 2': 0,
      };
    },
    updateQuit: (state, { payload }) => {
      const st = state;
      st.quit = payload;
    },
    updateRestart: (state, { payload }) => {
      const st = state;
      st.restart = payload;
    },
  },
});

export const {
  clickedCard,
  updatePlayerOne,
  updatePlayerTwo,
  setDifficulty,
  resetClickedCards,
  updateWinnerCount,
  updateQuit,
  resetWinnerCount,
  updateRestart,
} = cardSlice.actions;

export default cardSlice;
