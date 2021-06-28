/* function getPositions(s = 3) {
  const Step = [0, 0, 0];
  for (let i = 0; i <= s; i++) {
    if (i % 9 == 0 && i != 3 && i != 0) {
      if (i % 27 == 0) Step[2] = 0;
      else Step[2]++;
      Step[1] = 0;
      Step[0] = 0;
    } else if (i % 3 == 0 && i != 0) {
      Step[1]++;
      Step[0] = 0;
    } else {
      Step[0]++;
    }
  }
  return Step;
}
console.log(getPositions());
console.log(getPositions(54));
console.log(getPositions(98));
 */

function removeSmallest(numbers = [1, 2, 3, 4, 5,1]) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((x, i) => i != minIndex);
}
console.log(removeSmallest());
