console.log(
  function doubleChar(str="abcd") {
    return str.replace(/./ig,(v)=>v+v)
  }()
);
// [doubleChar] using replace w regex and function inside replace
