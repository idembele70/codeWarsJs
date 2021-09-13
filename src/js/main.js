console.log(
  function solution(a="45", b="1") {
    const {length : aLength} = a
    const {length} = b
    return aLength < length ? a.concat(b,a) : b.concat(a,b)
  }()
);
// [solution] using destructuration, concat