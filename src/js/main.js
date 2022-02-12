function reverseWords(str="Hello world!") {
  return str.split(' ').reverse().join` `
}
console.log(reverseWords())
// [reverseWords] using split reverse and join