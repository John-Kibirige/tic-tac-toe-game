import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateRestart,
  resetClickedCards,
  resetWinnerCount,
} from '../redux/cards';

const RestartPopup = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(updateRestart(false));
  };
  const handleRestart = () => {
    dispatch(updateRestart(false));
    dispatch(resetClickedCards());
    dispatch(resetWinnerCount());
  };

  return (
    <section className='restart-popup absolute top-0 bottom-0 right-0 left-0 flex flex-col z-50'>
      <div className='bg-slate-700 my-auto pt-10'>
        <p className='uppercase text-xl text-center font-bold tracking-widest '>
          restart game?
        </p>
        <div className='btns flex justify-center gap-4 mt-6 mb-10'>
          <button
            className='no-cancel uppercase bg-slate-300 text-zei-dark px-3 py-2 rounded-2xl text-sm font-bold tracking-wider hover:bg-slate-200 active:scale-105'
            onClick={handleCancel}>
            no, cancel
          </button>
          <button
            className='restart uppercase bg-zei-yel text-zei-dark px-2 py-3 rounded-2xl text-sm font-bold tracking-wider hover:bg-yellow-400 active:scale-105'
            onClick={handleRestart}>
            yes, restart
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestartPopup;
