function factorial(n = 4) {
  let factorialOfN = 1;
  for (let i = 1; i <= n; i++) {
    factorialOfN *= i;
  }
  return factorialOfN;
}

console.log(factorial());