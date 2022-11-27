import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { nextPlayer } from '../scripts/nextPlay';
import GameHeader from './GameHeader';
import Bottom from './Bottom';
import { getWinner } from '../scripts/winner';
import WinnerPopup from './WinnerPopup';
import RestartPopup from './RestartPopup';

const Game = () => {
  const { clickedCards, restart } = useSelector((state) => state.clickedCards);
  const next = nextPlayer(clickedCards);
  const { winner: currentWinner, pattern: winningPattern } = getWinner(
    clickedCards.map((obj) => obj.id)
  );

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (clickedCards.length >= 5) {
      setTimeout(() => {
        if (currentWinner === 'x' || currentWinner === 'o') {
          setShowPopup(true);
          return;
        }
        if (clickedCards.length === 9 && currentWinner === '') {
          setShowPopup(true);
        }
      }, 600);
    }
    if (clickedCards.length === 0) {
      setShowPopup(false);
    }
  }, [clickedCards, currentWinner]);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
    <Card
      key={card}
      id={card}
      next={next}
      winner={currentWinner}
      pattern={winningPattern}
    />
  ));

  return (
    <div className='px-6 mt-10 pb-6 relative transition-all'>
      <GameHeader next={next} winner={currentWinner} />
      <div className='cards grid grid-cols-3 mt-5 gap-4 mb-5'>{cards}</div>
      <Bottom winner={currentWinner} />
      {showPopup && <WinnerPopup winner={currentWinner} />}
      {showPopup && (
        <div className='overlay absolute left-0 right-0 top-0 bottom-0 bg-gray-900 opacity-60 -mt-40 -mb-40'></div>
      )}
      {restart && <RestartPopup />}
    </div>
  );
};

export default Game;
