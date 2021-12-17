console.log(
  function sumTwoSmallestNumbers(numbers = [15, 28, 4, 2, 43]) {
    const mins = []
    numbers.forEach(
      x => {
        if (mins.length < 2) mins.push(x)
        else if (mins[0] > x) {
          mins.splice(0, 1)
          mins.push(x)
        }
        else if (mins[1] > x) {
          mins.splice(1, 1)
          mins.push(x)
        }
      }
    )
    const min = Math.min(...mins)
    const max = Math.max(...mins)
    console.log(mins)
    return max + min
  }()
);
// [sumTwoSmallestNumbers] trying