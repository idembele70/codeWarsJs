function isVow(a=[118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]) {
  for (let i = 0; i < a.length; i++) {
    const currentChar = String.fromCharCode(a[i])
    currentChar.match(/a|e|i|o|u/) ? a[i]=currentChar : 0
  }
  return a
}

console.log(isVow())

