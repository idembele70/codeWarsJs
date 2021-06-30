function getPositions(s = 3) {
  const Step = [0, 0, 0];
  return [~~(s%3), ~~(s/3) %3, ~~(s/9)%3]
}
console.log(getPositions());
console.log(getPositions(54));
console.log(getPositions(98));

