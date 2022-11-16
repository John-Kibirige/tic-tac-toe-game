const getWinner = (arr) => {
  const winningStates = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const xTrack = arr.filter((_, index) => (index + 1) % 2 === 1);
  const oTrack = arr.filter((_, index) => (index + 1) % 2 === 0);

  let winner = 'no-winner';
  let winningPattern = [];

  winningStates.forEach((element) => {
    if (element.every((e) => xTrack.includes(e))) {
      winner = 'x';
      winningPattern = element;
    }
    if (element.every((e) => oTrack.includes(e))) {
      winner = 'o';
      winningPattern = element;
    }
  });
  return { winner, pattern: winningPattern };
};

export { getWinner };
