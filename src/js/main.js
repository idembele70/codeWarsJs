const binaryArrayToNumber = (arr=[1,0,0,0,1,1,0]) => {
  return arr.reverse().reduce(
    (acc,cur,id)=>acc+=cur*Math.pow(2,id)
  )
}
console.log(binaryArrayToNumber());