function palindrome(num="-451") {
  return typeof num === "number" && num >=0 ?parseInt(`${num}`.split("").reverse().join("")) === num  :"Not valid"
}
console.log(palindrome())
// [filterLongWord] using split, template string in split and filter functions, destructurind, and in conditions