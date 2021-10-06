function f(n = 100) {
  let sum = 0
  let res = ""
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  if (typeof (n) === "string")
    res = false, ", n must be a number"
  else if (typeof (n) === "undefined")
    res = false, "n must be a value"
  else if (!Number.isInteger(n))
    res = false, "n must be an integer"
  else if (n === 0)
    res = false, "a value of n greater than 0 is required"
  else if (n < 0)
    res = false, "a positive value of n is required"
  else
    res = sum
  return res
}
console.log(f());
// [f] using for iteration if condition, else if type of 

