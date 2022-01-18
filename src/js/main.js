console.log(
  function findNextSqure(sq=121) {
    const sqrt = Math.sqrt(sq)
    if(Number.isInteger(sqrt))
    return (sqrt +1) ** 2
    return -1
  }()
);

// [findNextSqure] using math sqrt number isInteger and return funciton