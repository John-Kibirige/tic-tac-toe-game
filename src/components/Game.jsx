import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { nextPlayer } from '../scripts/nextPlay';
import GameHeader from './GameHeader';
import Bottom from './Bottom';

const Game = () => {
  const { clickedCards, players } = useSelector((state) => state.clickedCards);
  const next = nextPlayer(clickedCards);
  if(clickedCards.length === 9){
    console.log(clickedCards);
  }

  const player1 = players[0].playerOne.name;
  const choice1 = players[0].playerOne.choice;
  const player2 = players[1].playerTwo.name;
  const choice2 = players[1].playerTwo.choice;

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
    <Card key={card} id={card} next={next} />
  ));

  return (
    <div className='px-6 mt-10 pb-6 '>
      <GameHeader next={next} />
      <div className='cards grid grid-cols-3 mt-5 gap-4 mb-5'>{cards}</div>
      <Bottom
        playerOne={player1}
        playerTwo={player2}
        choice1={choice1}
        choice2={choice2}
      />
    </div>
  );
};

export default Game;
