console.log(
  function duplicateCount(text="Indivisibility") {
  let duplicateCounter= []
  text = text.toLocaleLowerCase()
    for (const letter of text) {
      if(text.match(new RegExp(letter,"ig")).length > 1 && !duplicateCounter.includes(letter)){
        duplicateCounter.push(letter)
        console.log(letter)
      }
    }
    return duplicateCounter.length
  }()
);
// [duplicateCount] using let variable, toLocaleLowerCase forof iteration match RegExp includes push and log function and length