console.log(
  function solution(string="camelCasing") {
    newString = ""
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if(/[A-Z]/.test(letter))
      newString +=` ${letter}`
      else
      newString+= letter
    }
    return newString
  }()
);
// [solution] using for iteration if condition and regex test