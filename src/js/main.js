console.log(
  function sortByBit(array=[30,0]) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      sum+= 2**number
    }
    return sum
  }()
);


// [sortByBit] using reduce iteration math pow 