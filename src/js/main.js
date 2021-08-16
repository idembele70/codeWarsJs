function sum(digits="64323") {
  if(digits === undefined) return ""
  else {
  const sum = " = "+  [...digits].reduce(
    (acc,cur)=>acc+ parseInt(cur),0
  )
  return [...digits].join` + ` + sum
  }
}
console.log(sum())
// [sum] using toString join reduce