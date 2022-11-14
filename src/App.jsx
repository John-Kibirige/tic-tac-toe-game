import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game';
import Home from './components/Home';
import Difficulty from './components/Difficulty';

const App = () => {
  const { players, difficulty } = useSelector((state) => state.clickedCards);

  const [showGame, setShowGame] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);

  useEffect(() => {
    const { playerTwo } = players[1];
    if (playerTwo.name === 'player 2' || difficulty !== '') {
      setShowGame(true);
    }
  });

  useEffect(() => {
    const { playerTwo } = players[1];
    if (playerTwo.name === 'cpu') {
      if (difficulty === '') {
        setShowDifficulty(true);
      } else {
        setShowDifficulty(false);
      }
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
