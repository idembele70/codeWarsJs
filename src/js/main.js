function solution(string="camelCasing") {
  return string.replace(/[A-Z]/g, match=>` ${match}`)
}
console.log(solution())
// [solution] using replace, regex and template string