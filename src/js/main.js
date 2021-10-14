console.log(
  function strong(n = 145) {
    let factorielleSum = 0
    for (let i = 0; i < `${n}`.length; i++) {
      factorielleSum += factorielle(`${n}`.charAt(i))
    }
    if(factorielleSum === n )return "STRONG!!!!"
    return "Not Strong !!"
  }()
);
function factorielle(n) {
  let factorielleNumber = 1
  for (let i = 1; i <= +n; i++) {
    const number = n[i]
    factorielleNumber *= i
  }
  return factorielleNumber
}
// [strong] using string template for iteration, charAt function, function inside function and if statement
