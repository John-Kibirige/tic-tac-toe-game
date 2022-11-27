const originalState = {
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
  winnerCount: {
    tie: 0,
    you: 0,
    cpu: 0,
    'player 2': 0,
  },
  quit: false,
  restart: false,
};

export {originalState}