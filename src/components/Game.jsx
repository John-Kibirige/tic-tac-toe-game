import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { nextPlayer } from '../scripts/nextPlay';
import GameHeader from './GameHeader';
import Bottom from './Bottom';
import { getWinner } from '../scripts/winner';
import WinnerPopup from './WinnerPopup';

const Game = () => {
  const { clickedCards } = useSelector((state) => state.clickedCards);
  const next = nextPlayer(clickedCards);
  const [winner, setWinner] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (clickedCards.length >= 5) {
      setWinner(() => {
        return getWinner(clickedCards);
      });
      setTimeout(() => {
        if (winner === 'x' || winner === 'o') {
          setShowPopup(true);
          return;
        }
        if (clickedCards.length === 9 && winner === 'no-winner') {
          setShowPopup(true);
        }
      }, 500);
    }
    if (clickedCards.length === 0) {
      setShowPopup(false);
      setWinner('');
    }
  }, [clickedCards, winner]);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
    <Card key={card} id={card} next={next} />
  ));

  return (
    <div className='px-6 mt-10 pb-6 relative'>
      <GameHeader next={next} />
      <div className='cards grid grid-cols-3 mt-5 gap-4 mb-5'>{cards}</div>
      <Bottom />
      {showPopup && <WinnerPopup winner={winner} />}
      {showPopup && (
        <div className='overlay absolute left-0 right-0 top-0 bottom-0 bg-gray-900 opacity-60 -mt-40 -mb-40'></div>
      )}
    </div>
  );
};

export default Game;
