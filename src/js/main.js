console.log(
  function solution(string="camelCasing") {
    return string.replace(new RegExp(/([A-Z])/,"g"), ' $1')
  }()
);
// [solution] using regex memoization and replace functions