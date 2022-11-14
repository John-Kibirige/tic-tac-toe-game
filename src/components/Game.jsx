import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { nextPlayer } from '../scripts/nextPlay';

const Game = () => {
  const { clickedCards } = useSelector((state) => state.clickedCards);
  const next = nextPlayer(clickedCards);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
    <Card key={card} id={card} next={next} />
  ));
  return (
    <div className='px-6 border border-green-400'>
      <div className='cards grid grid-cols-3 mt-5 gap-4 mb-5'>{cards}</div>
    </div>
  );
};

export default Game;
