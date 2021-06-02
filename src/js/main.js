const binaryArrayToNumber = (arr=[1,0,0,0,1,1,0]) => {
  return arr.reverse().map(
    (x,i)=>x*2**i).reduce((acc,cur)=>acc+=cur)
}
console.log(binaryArrayToNumber());