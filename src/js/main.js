console.log(
  function findMultiples(integer=5,limit=25) {
    const length = limit / integer
    const ArrayLength = length.toString().split('.')[0]
    return [...Array(+ArrayLength)].map(
      (value,idx)=>integer * idx + integer
    )
  }()
  );
// [findMultiples] W/ Array & destructure
