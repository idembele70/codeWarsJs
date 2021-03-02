function basicOp(operation, value1, value2)
{
  const obj = {
    '+' : value1 + value2,
    '-' : value1 - value2,
    '*' : value1 * value2,
    '/' : value1 / value2, 
  }
  return obj[operation];
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18),);
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));