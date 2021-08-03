console.log(
  (function pipeFix(numbers = [6, 9]) {
    const pipeFixLength = numbers[numbers.length - 1] - numbers[0] + 1;
    const minNumbers = numbers[0]
    return Array(pipeFixLength).fill(minNumbers).map(
      (number,idx)=>number+=idx
    );
  })()
);

// [pipeFix] using fill Array map
