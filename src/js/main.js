console.log(
  function doubleChar(str="abcd") {
    return [...str].map(letter=>letter.repeat(2)).join``
  }()
);
// [doubleChar] using restfull map repeat and join