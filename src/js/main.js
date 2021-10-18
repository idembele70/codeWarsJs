console.log(
  function doubleChar(str="abcd") {
    return str.replace(/./ig,"$&".repeat(2))
  }()
);
// [doubleChar] using replace w regex and repeat
