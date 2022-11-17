import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWinnerCount } from '../redux/cards';

const Bottom = (props) => {
  const { winner, xCount = 0, oCount = 0, draws = 0 } = props;

  const dispatch = useDispatch();
  const { players, clickedCards, winnerCount } = useSelector(
    (state) => state.clickedCards
  );

  const player1 = players[0].playerOne.name;
  const choice1 = players[0].playerOne.choice;
  const player2 = players[1].playerTwo.name;
  const choice2 = players[1].playerTwo.choice;

  useEffect(() => {
    if (winner === choice1) {
      dispatch(updateWinnerCount(player1));
    } else if (winner === choice2) {
      dispatch(updateWinnerCount(player2));
    } else if (winner === 'no-winner' && clickedCards.length === 9) {
      dispatch(updateWinnerCount('tie'));
    }
  }, [clickedCards]);

  return (
    <div className='grid grid-cols-3 gap-4 text-center uppercase text-sm font-bold mt-5'>
      <div className='x-count rounded-lg pt-1 bg-zei-cyan text-slate-800 '>
        <p className='tracking-wider'>{`${choice1} (${player1})`}</p>
        <p className='text-lg '>{xCount}</p>
      </div>

      <div className='draws rounded-lg pt-1 pb-0 bg-slate-400 text-slate-800 '>
        <p className='tracking-wider'>ties</p>
        <p className='text-lg '>{draws}</p>
      </div>

      <div className='o-count rounded-lg pt-1 bg-zei-yel text-slate-800  pb-0'>
        <p className='tracking-wider'>{`${choice2} (${player2})`}</p>
        <p className='text-lg '>{oCount}</p>
      </div>
    </div>
  );
};

export default Bottom;
