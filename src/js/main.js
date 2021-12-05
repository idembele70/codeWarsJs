console.log(
  function solution(string="camelCasing") {
    return string.replace(/[A-Z]/g, ' $&')
  }
);
// [solution] using regex and replace functions