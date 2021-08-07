console.log(
  function mulpileOfIndex(array= [68, -1, 1, -7, 10, 10])
  {
    const arrayOfMultipleOfIndex = []
    for (let i = 0; i < array.length; i++) {
      const number = array[i]
      if(number % i === 0)
      arrayOfMultipleOfIndex.push(number)
    }
    return arrayOfMultipleOfIndex
  }()
)
// [multipleOfIndex] using for and push

