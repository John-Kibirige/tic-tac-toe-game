import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game';
import Home from './components/Home';
import Difficulty from './components/Difficulty';

const App = () => {
  const { players } = useSelector((state) => state.clickedCards);

  const [showGame, setShowGame] = useState(false);
  useEffect(() => {
    const { playerTwo } = players[1];
    if (playerTwo.name === 'player 2') {
      setShowGame(true);
    }
  });

  return (
    <div className='App'>
      {/* {!showGame && <Home />}
      {showGame && <Game />} */}
      <Difficulty />
    </div>
  );
};

export default App;
