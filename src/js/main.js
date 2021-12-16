console.log(
  function sumTwoSmallestNumbers(numbers = [5, 8, 12, 19, 22]) {
    numbers.sort((a,b)=>a-b)
    const minOne = numbers[0]
    const minTwo = numbers[1]
    return minOne+minTwo
  }()
);
// [sumTwoSmallestNumbers] using sort function