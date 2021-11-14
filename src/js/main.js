console.log(
  function divisions(n=6,divisor=2) {
   let numberOfDivisions = 0
   for (let i = n; i > divisor;numberOfDivisions++) {
     i = i / divisor
   }
   return numberOfDivisions
  }()
);
// [divisions] using let variable for iteration
