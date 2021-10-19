console.log(
  function doubleChar(str="abcd") {
   let strRepeated = ""
    for (const letter of str) {
     strRepeated += letter.concat(letter)
   }
   return strRepeated
  }()
);
// [doubleChar] using let variable forof iteration string concatenation and string addition