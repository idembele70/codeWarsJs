

function arrayMadness(a=[4,5,6],b=[1,2,4]) {
let sumOfA = 0
let sumOfB = 0
for (const number of a) {
  sumOfA += Math.pow(number,2)
}
for (const number of b) {
  sumOfB += Math.pow(number,3)
}
return sumOfA > sumOfB
}

console.log(arrayMadness());

// [reducer] usign for of