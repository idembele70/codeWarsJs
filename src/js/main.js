function filterLongWord(sentence,n) {
  return sentence.split(' ').filter(
    word=>word.length > n 
  )
}
console.log(filterLongWord())
// [filterLongWord] using split and filter functions