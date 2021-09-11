console.log(
  function between(a=1,b=4) {
    return Array.from({length : ++b - a},
      (number,idx)=>1 * idx + a)
  }()
);
// [between] using Array from