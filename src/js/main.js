function findOdd(A=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) {
  let nombre = 0, compteur = 0;
  for (let i = 0; i < A.length; i++) {
    let compteur = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]){
       compteur++
      }
    }
    if (compteur %2 !== 0) {
      nombre = A[i]
    }
  }
  return nombre
}

console.log(findOdd());