console.log(
  function between(a=1,b=4) {
    const betweenArray = []
    for (let i = a, c = b; i <= c; i++) {
      betweenArray.push(i)
    }
    return betweenArray
  }()
);
// [between] using for iteration