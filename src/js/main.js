const isVeryEvenNumber = (n = 5) => {
  while (n.toString().length > 1) {
    n = [...n.toString()].reduce(
      (acc, cur) => acc + +cur, 0
    )
  }
  return +n % 2 === 0
}
console.log(isVeryEvenNumber())

// 