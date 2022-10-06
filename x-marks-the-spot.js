const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'west') {
      x--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'south') {
      y--;
    }
  }
  return [x, y];
}