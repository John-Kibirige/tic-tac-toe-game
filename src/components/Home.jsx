import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlayerOne, updatePlayerTwo } from '../redux/cards';

const Home = () => {
  const dispatch = useDispatch();

  const [choice, setChoice] = useState('o');

  const handleChange = (event) => {
    const { value } = event.target;
    setChoice(value);
  };

  useEffect(() => {
    dispatch(updatePlayerOne(choice));
  }, [choice]);

  const playWithCPU = () => {
    const playerTwoChoice = choice === 'x' ? 'o' : 'x';
    dispatch(updatePlayerTwo({ name: 'cpu', choice: playerTwoChoice }));
  };

  const playWithPlayer = () => {
    const playerTwoChoice = choice === 'x' ? 'o' : 'x';
    dispatch(updatePlayerTwo({ name: 'player 2', choice: playerTwoChoice }));
  };

  return (
    <div className='sm:w-1/3 mx-auto mt-10 px-6'>
      <>
        <svg
          className='logo block mx-auto my-6'
          width='72'
          height='32'
          xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <path
              d='M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z'
              fill='#31C3BD'
            />
            <path
              d='M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z'
              fill='#F2B137'
              fillRule='nonzero'
            />
          </g>
        </svg>
      </>

      <div className='choice px-3 bg-zei-light pb-4 rounded-xl shadow-3xl'>
        <h2 className='py-4 uppercase font-bold text-slate-300 text-center '>
          pick player 1's mark
        </h2>
        <form action='#' className='form flex bg-zei-dark py-3 px-2 rounded-xl'>
          <div className='x w-full'>
            <input
              type='radio'
              name='choice'
              id='c-x'
              value={'x'}
              onChange={handleChange}
              checked={choice === 'x'}
              className='hidden'
            />
            <label
              htmlFor='c-x'
              className={`x-svg w-full flex justify-center py-2 rounded-lg transition-all  ${
                choice === 'x'
                  ? 'bg-slate-300'
                  : 'hover:bg-gray-700 cursor-pointer'
              }`}>
              <div>
                <svg
                  className={`x-logo fill-slate-50 w-7 ${
                    choice === 'x' ? 'fill-slate-900' : ''
                  }`}
                  width='100%'
                  height='100%'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
                    fillRule='evenodd'
                  />
                </svg>
              </div>
            </label>
          </div>
          <div className='o w-full'>
            <input
              type='radio'
              name='choice'
              id='c-o'
              value={'o'}
              onChange={handleChange}
              checked={choice === 'o'}
              className='hidden'
            />
            <label
              htmlFor='c-o'
              className={`o-svg w-full flex justify-center py-2 rounded-lg transition-all  ${
                choice === 'o'
                  ? 'bg-slate-300'
                  : 'hover:bg-gray-700 cursor-pointer'
              } `}>
              <div>
                <svg
                  className={`o-logo fill-slate-50 w-7 ${
                    choice === 'o' ? 'fill-slate-800' : ''
                  }`}
                  width='100%'
                  height='100%'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z' />
                </svg>
              </div>
            </label>
          </div>
        </form>
        <p className='py-2 uppercase text-center tracking-wider text-sm font-bold text-gray-400 mt-3'>
          Remember x goes first
        </p>
      </div>

      <div className='opponents'>
        <button
          className='with-cpu bg-zei-yel hover:bg-yellow-400 transition-all block uppercase text-slate-800 tracking-wider font-medium py-3 w-full rounded-lg mt-8 shadow-3xl-o active:scale-105'
          onClick={playWithCPU}>
          new game (vs cpu)
        </button>
        <button
          className='with-cpu bg-zei-cyan hover:bg-cyan-400 block uppercase text-slate-800 tracking-wider font-medium py-3 w-full rounded-lg mt-5  mb-5 shadow-3xl-c transition-all active:scale-105'
          onClick={playWithPlayer}>
          new game (vs player)
        </button>
      </div>
    </div>
  );
};

export default Home;
