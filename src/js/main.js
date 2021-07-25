console.log(
  function powerOfTwo(n=4) {
    return [...Array(++n).keys()].map(x=>Math.pow(2,x))
  }()
)
