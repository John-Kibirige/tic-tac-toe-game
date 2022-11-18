import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWinnerCount } from '../redux/cards';

const Bottom = (props) => {
  const { winner } = props;

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
      <div
        className={`x-count rounded-lg pt-1 text-slate-800 ${
          choice1 === 'x' ? 'bg-zei-cyan' : 'bg-zei-yel'
        } `}>
        <p className='tracking-wider'>{`${choice1} (${player1})`}</p>
        <p className='text-lg '>{winnerCount[`${player1}`]}</p>
      </div>

      <div className='draws rounded-lg pt-1 pb-0 bg-slate-400 text-slate-800 '>
        <p className='tracking-wider'>ties</p>
        <p className='text-lg '>{winnerCount.tie}</p>
      </div>

      <div
        className={`o-count rounded-lg pt-1  text-slate-800  pb-0 ${
          choice2 === 'o' ? 'bg-zei-yel' : 'bg-zei-cyan'
        }`}>
        <p className='tracking-wider'>{`${choice2} (${player2})`}</p>
        <p className='text-lg '>{winnerCount[`${player2}`]}</p>
      </div>
    </div>
  );
};

export default Bottom;
