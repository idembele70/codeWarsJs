function solution(string="camelCasing") {
  return string.replace(/[A-Z]/g, " $&")
}
console.log(solution())
// [solution] using replace and regex