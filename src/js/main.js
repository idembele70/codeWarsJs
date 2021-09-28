function twoHighest(arr = [4, 10, 10, 9]) {
  return arr.sort(
    (a, b) => a - b
  ).filter((element, idx, arr) => arr.indexOf(element) === idx).slice(-2)
}
const result = twoHighest()
console.log(result.reverse());
// [twoHighest] using for array sorting filter indexOf slice
