function findOdd(A=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) {
  const obj = {};
  A.forEach(function(el){
obj[el] ? obj[el]++ : obj[el]=1;
  });
  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
    }
  }

console.log(findOdd());

// LEAR  XOR operator