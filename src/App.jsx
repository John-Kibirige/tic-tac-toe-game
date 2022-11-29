import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from './components/Game';
import Home from './components/Home';
import Difficulty from './components/Difficulty';

const App = () => {
  const { players, difficulty, quit } = useSelector(
    (state) => state.clickedCards
  );

  const [showGame, setShowGame] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);

  useEffect(() => {
    const { playerTwo } = players[1];
    if (playerTwo.name === 'player 2' || difficulty !== '') {
      setShowGame(true);
    }

    if (playerTwo.name === 'cpu') {
      setShowDifficulty(true);
    }

    if (difficulty) {
      setShowDifficulty(false);
      setShowGame(true);
    }

    if (quit === true) {
      setShowGame(false);
      setShowDifficulty(false);
    }
  });

  return (
    <div className='App'>
      {!showGame && !showDifficulty && <Home />}
      {showDifficulty && <Difficulty />}
      {showGame && <Game />}
    </div>
  );
};

export default App;
