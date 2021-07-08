function problem(x="hello") {
  return typeof(x)=="string" ? "Error" : x*50+6
}
console.log(problem())
console.log(problem(1))