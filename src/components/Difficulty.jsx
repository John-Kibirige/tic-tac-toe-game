import React from 'react';
import { useDispatch } from 'react-redux';
import { setDifficulty } from '../redux/cards';

const Difficulty = () => {
  const dispatch = useDispatch();

  const handleEasyClick = () => {
    dispatch(setDifficulty('easy'));
  };
  const handleMediumClick = () => {
    dispatch(setDifficulty('medium'));
  };
  const handleHardClick = () => {
    dispatch(setDifficulty('hard'));
  };

  return (
    <div className='text-center mt-20 mx-6 bg-zei-light text-slate-300 uppercase pt-6 pb-12 rounded-xl'>
      <h2 className='py-1  font-bold text-xl tracking-wider text-zei-cyan'>
        Select difficulty
      </h2>
      <ul className='mt-8'>
        <li className='d w-11/12 mx-auto'>
          <button
            className='text-xl cursor-pointer font-bold  tracking-wide hover:text-zei-cyan hover:bg-zei-dark py-4 uppercase w-full'
            onClick={handleEasyClick}>
            Easy
          </button>
        </li>
        <li className=' d w-11/12 mx-auto'>
          <button
            className='text-xl cursor-pointer font-bold tracking-wide hover:text-zei-cyan hover:bg-zei-dark py-4 uppercase w-full'
            onClick={handleMediumClick}>
            Medium
          </button>
        </li>
        <li className='d w-11/12 mx-auto'>
          <button
            className='text-xl cursor-pointer font-bold tracking-wide hover:text-zei-cyan hover:bg-zei-dark py-4 uppercase w-full'
            onClick={handleHardClick}>
            Hard
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Difficulty;
