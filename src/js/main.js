function numberToPower(number = 4, power = 2) {
 let i =0, res = 1
  while (i < power) {
   res*= number
   i++
 }
 return res
}
console.log(numberToPower());
