function solution(string = "camelCasing") {
  let stringCamelCased = ""
  for (const char of string) {
    if (char.match(/[A-Z]/))
    stringCamelCased += ` ${char}`
    else
    stringCamelCased += char
  }
  return stringCamelCased
}
// [solution] using for iteration regex let variable template string
