console.log(
  function sortByBit(array=[30,0]) {
    return array.reduce(
      (accumulator,current)=>accumulator += Math.pow(2,current),0
    )
  }()
);


// [sortByBit] using reduce iteration math pow 