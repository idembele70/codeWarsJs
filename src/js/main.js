console.log(
  function connotation(str="A big brown fox caught a bad bunny") {
    let firstHalfCount = 0
    let secondHalfCount = 0
    str = str.replace(/\s+/g," ")
    str.split(' ').forEach(
      word=>word.charAt(0).toLowerCase() <= "m" ? firstHalfCount++ : secondHalfCount++
    )
    return firstHalfCount >= secondHalfCount
  }()
);
// [connotation] trying

