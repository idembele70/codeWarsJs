console.log(
  function powerOfTwo(n=4) {
  return Array.from({length : ++n},(v,i)=>Math.pow(2,i))
  }()
)

