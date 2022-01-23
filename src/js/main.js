const squareSum = (numbers = [1, 2]) => numbers?.map(number=> number ** 2).reduceRight((acc, cur) => acc + cur, 0)
  ;
console.log(squareSum());


// [squareSum] using map function regduceRight and arrow function