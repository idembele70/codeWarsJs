function fakeBin(x='45385593107843568') {
 return   x.split('').map(x => x < 5 ? 0 : 1).join``;
}

console.log(fakeBin());