console.log(
  function doubleChar(str="abcd") {
   let strRepeated = ""
    for (const letter of str) {
     strRepeated += `${letter}${letter}`
   }
   return strRepeated
  }()
);
// [doubleChar] using let variable forof iteration string template and string addition