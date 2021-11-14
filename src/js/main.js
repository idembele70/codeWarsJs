console.log(
  function divisions(n=6,divisor=2) {
   let count = 0
    while(n > divisor){
      n /= divisor
      count++
    }
    return count 
  }()
);
// [divisions] using let variable while iteration divisor self asigment
