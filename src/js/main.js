function vowelIndices(word = "orange") {
  return word.split('').map((char, index) => !!char.match(/a|e|y|u|i|o/i) ? index + 1 : "").filter(x=> x !="")

}
console.log(vowelIndices());