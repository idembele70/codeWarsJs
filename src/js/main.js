function vowelIndices(word = "orange") {
  const res = []
   word.split('').map((char, index) => !!char.match(/a|e|y|u|i|o/i) ? res.push(index+1) : null)
   return res
}
console.log(vowelIndices());