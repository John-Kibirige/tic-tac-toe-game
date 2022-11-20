import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickedCard } from '../redux/cards';
import { saveState } from '../scripts/storage';

import Hover from './Hover';

const Card = (prop) => {
  const { id, next, winner, pattern } = prop;
  const pureState = useSelector((state) => state.clickedCards);
  const { clickedCards } = pureState;
  const dispatch = useDispatch();

  const [hoverSymbol, setHoverSymbol] = useState('');
  const [cardVal, setCardVal] = useState('');

  const handleOnCardClicked = () => {
    if (!clickedCards.some((obj) => obj.id === id)) {
      dispatch(clickedCard({ id, value: next }));
      setHoverSymbol('');
      setCardVal(next);
    }
  };

  // suppose we just re rendered we want to set the card value to what is stored on the local storage
  useEffect(() => {
    const filtered = clickedCards.filter((obj) => obj.id === id);
    if (filtered.length) {
      setCardVal(filtered[0].value);
    }
  }, []);

  const handleMouseOverEvent = () => {
    if (!clickedCards.some((obj) => obj.id === id)) {
      setHoverSymbol(next);
    }
  };

  const handleMouseOutEvent = () => {
    setHoverSymbol('');
  };

  // save state to local storage
  useEffect(() => {
    saveState(pureState);
  }, [clickedCards]);

  return (
    <div
      className={`${
        winner === 'x' && pattern.includes(id)
          ? 'bg-zei-cyan'
          : winner === 'o' && pattern.includes(id)
          ? 'bg-zei-yel'
          : 'bg-zei-light'
      }  flex justify-center items-center h-[96.2167px] rounded-lg shadow-3xl transition-all cursor-pointer`}
      onClick={handleOnCardClicked}
      onMouseOver={handleMouseOverEvent}
      onMouseOut={handleMouseOutEvent}>
      {cardVal === 'x' && clickedCards.some((obj) => obj.id === id) && (
        <svg
          className={`py-1 w-11 ${
            winner === 'x' && pattern.includes(id)
              ? 'fill-zei-light'
              : 'fill-zei-cyan '
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
      )}
      {cardVal === 'o' && clickedCards.some((obj) => obj.id === id) && (
        <svg
          className={`py-1 w-11 ${
            winner === 'o' && pattern.includes(id)
              ? 'fill-zei-light'
              : 'fill-zei-yel '
          }`}
          width='100%'
          height='100%'
          viewBox='0 0 64 64'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z' />
        </svg>
      )}

      {hoverSymbol !== '' && <Hover hoverSymbol={hoverSymbol} />}
    </div>
  );
};

export default Card;
