function digitize(n=123) {
  return [...n.toString()].map(Number)
}
console.log(digitize());
// [digitize] using tostring and Number class