console.log(
  (function pipeFix(numbers = [6, 9]) {
    const max = numbers[numbers.length - 1];
    const min = numbers[0];
    const arrayOfPipeFix = []
    for (let i = min; i <= max; i++) {
      if(i <= max)arrayOfPipeFix.push(i)
    }
    return arrayOfPipeFix
  })()
);

// [pipeFix] using for loop