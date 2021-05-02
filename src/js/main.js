function vowelIndices(word = "orange") {
  return word.split('').map((char, index) => !!char.match(/[aeyuio]/i) ? index + 1 : "").filter(x=> x !="")

}
console.log(vowelIndices());