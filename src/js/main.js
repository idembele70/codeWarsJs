
const countPositivesSumNegatives = (input=[0,0]) =>{
  let sumNegative = null, sumPositive = null;
 input.forEach(el => el <= 0 ? sumNegative+= el : sumPositive++ );
return sumNegative !== 0 && sumPositive !== 0 ? [sumPositive, sumNegative] : [];
}


console.log(countPositivesSumNegatives());
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));