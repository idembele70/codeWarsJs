function removeChars(s=".tree1 A") {
  return [...s].filter(
    letter=>/[a-z]| /ig.test(letter)
  ).join``
}
console.log((removeChars()));
// [removeChars] using regex test, destructuring, join and filter function

