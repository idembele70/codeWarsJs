function fakeBin(x='45385593107843568') {
 x = x.replace(/[0-4]/g,0);
 x = x.replace(/[5-9]/g,1);
  return x
}

console.log(fakeBin());