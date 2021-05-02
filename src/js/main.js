function vowelIndices(word = "orange") {
  const vowIndices = [];
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    if (char.match(/[aeyuio]/i)) {
      vowIndices.push(++i)
      i--
    }
  }

  return vowIndices;
}
console.log(vowelIndices());