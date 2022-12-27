const handleEasy = (clickedCards) => {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const moves = clickedCards.map((card) => card.id);
  const remaining = base.filter((n) => !moves.includes(n));
  const randomIndex = Math.floor(Math.random() * remaining.length);
  return base[randomIndex];
};
