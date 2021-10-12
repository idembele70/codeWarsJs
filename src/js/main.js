function is_square(arr=[1,4,9,16]) {
for (let i = 0; i < arr.length; i++) {
  const number = arr[i]
  const numberSqrt = Math.sqrt(number)+" "
  if (numberSqrt.match(/\./ig)) {
    return false
  }
}
return arr.length ? true : undefined
}
console.log(is_square());
// [is_square] using for iteration sqrt regex match and ternary

