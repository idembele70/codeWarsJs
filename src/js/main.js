function findSquares(num = 9) {
  const midInteger = num / 2;
  return Math.ceil(midInteger) ** 2 + "-" + Math.floor(midInteger) ** 2;
}

console.log(findSquares(5));
