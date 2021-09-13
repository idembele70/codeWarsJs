console.log(
  function solution(a="45", b="1") {
    return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`
  }()
);
// [solution] using ternary