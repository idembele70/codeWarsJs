
const countPositivesSumNegatives = (input=[]) =>{
  let sumNegative = null, sumPositive = null;
if (input !== null) {
  return input;
} else {
  input.forEach(el => el <= 0 ? sumNegative += el : sumPositive ++);
}
return [sumPositive, sumPositive];
}

console.log(countPositivesSumNegatives());
/* console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); */