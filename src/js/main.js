function filterLongWord(sentence, n) {
  return sentence.split` `.filter(
    ({ length }) => length > n
  )
}
console.log(filterLongWord())
// [filterLongWord] using split, template string in split and filter functions, destructuring