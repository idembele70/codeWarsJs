function countPositivesSumNegatives(input) {
  function countPositivesSumNegatives(input) {
    let sumNegative = 0, sumPositive = 0;
      if(input !== null)input.forEach(el => el <= 0 ? sumNegative+= el : sumPositive++ );
    return sumNegative !== 0 && sumPositive !== 0 ? [sumPositive, sumNegative] : [];
    }

