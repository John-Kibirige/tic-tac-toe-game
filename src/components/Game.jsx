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
  const [winnerDetails, setWinnerDetails] = useState({
    winner: '',
    winningPattern: [],
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (clickedCards.length >= 5) {
      setWinnerDetails(() => {
        const { winner, pattern } = getWinner(
          clickedCards.map((obj) => obj.id)
        );
        return {
          winner,
          winningPattern: pattern,
        };
      });

      setTimeout(() => {
        if (winnerDetails.winner === 'x' || winnerDetails.winner === 'o') {
          setShowPopup(true);
          return;
        }
        if (clickedCards.length === 9 && winnerDetails.winner === 'no-winner') {
          setShowPopup(true);
        }
      }, 700);
    }
    if (clickedCards.length === 0) {
      setShowPopup(false);
      setWinnerDetails({ winner: '', winningPattern: [] });
    }
  }, [clickedCards, winnerDetails.winner]);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
    <Card
      key={card}
      id={card}
      next={next}
      winner={winnerDetails.winner}
      pattern={winnerDetails.winningPattern}
    />
  ));

  return (
    <div className='px-6 mt-10 pb-6 relative transition-all'>
      <GameHeader next={next} winner={winnerDetails.winner} />
      <div className='cards grid grid-cols-3 mt-5 gap-4 mb-5'>{cards}</div>
      <Bottom winner={winnerDetails.winner} />
      {showPopup && <WinnerPopup winner={winnerDetails.winner} />}
      {showPopup && (
        <div className='overlay absolute left-0 right-0 top-0 bottom-0 bg-gray-900 opacity-60 -mt-40 -mb-40'></div>
      )}
      {restart && <RestartPopup />}
    </div>
  );
};

export default Game;
