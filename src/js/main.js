console.log(
  function strCount(str="hello",letter="p") {
    return [...str].filter(strLetter=> strLetter === letter).length
  }()
);
// [strCount] using filter