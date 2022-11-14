const nextPlayer = (arr) => {
  const players = arr.map((_, index) => ((index + 1) % 2 === 0 ? 'x' : 'o'));
  return players.pop() || 'x';
};

export { nextPlayer };
