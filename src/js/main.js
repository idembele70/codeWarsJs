function solution(string="camelCasing") {
  return [...string].map(
    x=>/[A-Z]/.test(x) ? ` ${x}` : x
  ).join('')
}
console.log(solution())
// [solution] using destructuring map regex test and join