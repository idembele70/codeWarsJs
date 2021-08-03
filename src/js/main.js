console.log(
  (function pipeFix(numbers = [6, 9]) {
    const lengthOfPipeFix = numbers[numbers.length - 1] - numbers[0] + 1;
    const littleNumber = numbers[0];
    return Array.from(
      { length: lengthOfPipeFix },
      (numbers, index) => littleNumber + index
    );
  })()
);

// [pipeFix] using Array from method
