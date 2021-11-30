console.log(
  function duplicateCount(text="aabbcde") {
  let duplicateCounter= []
    for (const letter of text) {
      if(!duplicateCounter.includes(letter.toLowerCase()) && text.indexOf(letter.toLowerCase()) != text.lastIndexOf(letter.toLowerCase()))duplicateCounter.push(letter)
    }
    return duplicateCounter.length
  }()
);
// [duplicateCount] trying