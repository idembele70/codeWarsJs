console.log(function matrix(
  array = [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ]
) {
for (let i = 0; i < array.length; i++) {
  const arrayLine = array[i];
  const currentNumber= arrayLine[i] < 0 ? 0 : 1
  arrayLine.splice(i,1,currentNumber)
}
return array
}());

