function countPositivesSumNegatives(input=[]) {

let sumNegative = 0, sumPositive = 0;
if(input !== null && input.length !=0){input.forEach(el => el <= 0 ? sumNegative+= el : sumPositive++ )
return [sumPositive, sumNegative];} 
  else return [];
}
console.log(countPositivesSumNegatives());