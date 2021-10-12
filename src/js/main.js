function is_square(arr=[1,4,9,16]) {
  const {length} = arr
 if(length)
 return arr.filter(
   number=> [...Math.sqrt(number).toString()].indexOf(".") === -1
 ).length === length
 else
 return undefined
}
console.log(is_square());
// [is_square] using filter sqrt toString indexOf

