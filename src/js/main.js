console.log(
  function powerOfTwo(n=4) {
    const result = []
    for (let i = 0; i <= n; i++) {
      result.push(2**i)
    }
    return result
  }()
)
