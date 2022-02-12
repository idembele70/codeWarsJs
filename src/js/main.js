function reverseWords(str="Hello world!") {
  str = str.split(' ')
  const newStr = []
  for (const word of str) {
    newStr.unshift(word)
  }
  return newStr.join` `
}
console.log(reverseWords())
// [reverseWords] using split forof iteration and join