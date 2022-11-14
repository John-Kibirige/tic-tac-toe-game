import React from 'react';

const Bottom = (props) => {
  const {
    playerOne,
    playerTwo,
    choice1,
    choice2,
    xCount = 0,
    draws = 0,
    oCount = 0,
  } = props;
  return (
    <div className='grid grid-cols-3 gap-4 text-center uppercase text-sm font-bold mt-5'>
      <div className='x-count rounded-lg pt-1 bg-zei-cyan text-slate-800 '>
        <p className='tracking-wider'>{`${choice1} (${playerOne})`}</p>
        <p className='text-lg '>{xCount}</p>
      </div>

      <div className='draws rounded-lg pt-1 pb-0 bg-slate-400 text-slate-800 '>
        <p className='tracking-wider'>ties</p>
        <p className='text-lg '>{draws}</p>
      </div>

      <div className='o-count rounded-lg pt-1 bg-zei-yel text-slate-800  pb-0'>
        <p className='tracking-wider'>{`${choice2} (${playerTwo})`}</p>
        <p className='text-lg '>{oCount}</p>
      </div>
    </div>
  );
};

export default Bottom;
