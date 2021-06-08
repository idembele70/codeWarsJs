function isTriangle(a, b, c) {
  const tabsCote = [a + b, a + c, b + c].sort((a, b) => b - a);
  const max = tabsCote[0];
  const someMinMidVal = tabsCote[1] + tabsCote[2];
const surface = ;
  return isPositive && max < someMinMidVal;
}
console.log(isTriangle(7, 2, 2));
