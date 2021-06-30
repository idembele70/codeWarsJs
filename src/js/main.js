function spEng(sentence="english") {
  const word = new RegExp('english', 'i')
 return !!sentence.match(word)
}

console.log(spEng());