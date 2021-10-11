console.log(
  function evenOrOdd(str="12") {
    let oddSum = 0, evenSum = 0
    str.split('').forEach(
      number=>number % 2 ? oddSum += +number : evenSum += +number
    )
    return oddSum === evenSum ? "Even and Odd are the same" : 
    evenSum > oddSum ? "Even is greater than Odd": "Odd is greater than Even"
  }()
);
// [evenOrOdd] using split foreach and ternary

