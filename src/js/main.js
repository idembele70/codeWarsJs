function isSquare(arr = [9, 9, 16]) {
  let squarechecker = true
  arr.forEach(element => {
    if(String(Math.sqrt(element)).indexOf(".") !== -1)
    squarechecker = false
  });
  return squarechecker
}
console.log(isSquare());
// [isSquare] using forEach sqrt indexOf