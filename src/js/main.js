function is_square(arr=[1,4,9,16]) {
  if(!arr.length) return undefined
 return arr.every(
    number=>!(Math.sqrt(number).toString().includes("."))
  )
}
console.log(is_square());
// [is_square] using length method, every, sqrt number toString and includes function

