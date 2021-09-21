console.log(
  function countWords(str = `Arthur 
  David
 Nelson 
   Hello Gomer  
   Hello     Bart  `) {
    return str.trim().split(/\s{1,}/).filter(
      (word,idx,thisArray)=>thisArray.indexOf(word) === idx
    ).length
  }()
);
// [countWords] using trim filter 
