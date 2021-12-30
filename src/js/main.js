console.log(
  function solution(number=10) {
    const arr = []
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0)
        arr.push(i)
    }
    return arr.reduce(
      (acc, cur) => acc += cur, 0
    )
  }()
);

// [solution] usingfor iteration array push and reduce