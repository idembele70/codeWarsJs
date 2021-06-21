function countSheep(num = 3) {
  return [...Array(num).keys()].map(x=>`${x+1} sheep...`).join``
}

console.log(countSheep());