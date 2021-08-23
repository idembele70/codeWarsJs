console.log(
  function preFizz(n=2) {
    return Array.from({length : n}, (_value, idx)=>++idx)
  }()
);
// [preFizz] using array.from 


