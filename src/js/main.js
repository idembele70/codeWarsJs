console.log(
  function preFizz(n=2) {
    return Array(n).fill(1).map(
      (value,idx)=>value+idx
    )
  }()
);
// [preFizz] using array fill map


