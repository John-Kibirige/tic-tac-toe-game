import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetClickedCards } from '../redux/cards';

const WinnerPopup = (props) => {
  const { winner } = props;
  const dispatch = useDispatch();
  const [winningPlayer, setWinningPlayer] = useState('');
  const { players, clickedCards } = useSelector((state) => state.clickedCards);

  // get name of player who won
  useEffect(() => {
    let player = 'tie';
    if (players[0].playerOne.choice === winner) {
      player = players[0].playerOne.name;
    }
    if (players[1].playerTwo.choice === winner) {
      player = players[1].playerTwo.name;
    }
    setWinningPlayer(player);
  }, [winner]);

  // handle next round
  const handleNextRound = () => {
    dispatch(resetClickedCards());
  };

  return (
    <section className='popup absolute top-0 bottom-0 right-0 left-0 flex flex-col z-50'>
      <div className='py-8 bg-slate-700 my-auto pb-14'>
        <div className='py-1 '>
          {winningPlayer !== 'tie' && (
            <p className='uppercase text-sm text-center tracking-wider text-slate-300 font-bold'>
              {winningPlayer !== 'you' ? 'oh no, you lost!' : 'you won!'}
            </p>
          )}
          {winningPlayer !== 'tie' && (
            <div className='no-tie flex gap-3 justify-center items-center mt-4 mb-4'>
              {winner === 'x' && (
                <svg
                  className='py-1 w-8'
                  width='100%'
                  height='100%'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
                    fill='#31C3BD'
                    fillRule='evenodd'
                  />
                </svg>
              )}
              {winner === 'o' && (
                <svg
                  className='py-1 w-8'
                  width='100%'
                  height='100%'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z'
                    fill='#F2B137'
                  />
                </svg>
              )}
              {
                <p
                  className={`uppercase tracking-wider text-2xl font-bold ${
                    winner === 'x' ? 'text-zei-cyan' : 'text-zei-yel'
                  }`}>
                  takes the round
                </p>
              }
            </div>
          )}
          {winningPlayer === 'tie' && clickedCards.length === 9 && (
            <div className='tie'>
              <p className='py-1 uppercase font-bold text-slate-300 text-3xl text-center mb-4'>
                round tied
              </p>
            </div>
          )}
        </div>
        <div className='flex gap-4 justify-center'>
          <button className='uppercase bg-slate-400 text-slate-800 px-3 pt-2 pb-1 rounded-lg font-medium tracking-wider cursor-pointer shadow-3xl-hw text-sm active:scale-105  hover:bg-slate-300'>
            quit
          </button>
          <button
            className='uppercase bg-zei-yel text-slate-800 px-3 pt-3 pb-2  rounded-lg font-medium  tracking-wider cursor-pointer shadow-3xl-o2  text-sm active:scale-105 hover:bg-yellow-400'
            onClick={handleNextRound}>
            next round
          </button>
        </div>
      </div>
    </section>
  );
};

export default WinnerPopup;
