console.log(
  function mulpileOfIndex(array= [68, -1, 1, -7, 10, 10])
  {
    return array.filter(
      (number,i)=>number % i === 0
    )
  }()
)
// [multipleOfIndex] using only filter