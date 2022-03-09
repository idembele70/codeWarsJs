function solution(string="camelCasing") {
  return [...string].map(
    x=>x.replace(/([A-Z])/, " $1")
  ).join('')
}
console.log(solution())
// [solution] using destructuring map regex replace and join