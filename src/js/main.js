function toCamelCase(str="the_stealth_warrior") {
  const strToCamelCase = []
  canUpToUpper = false
  for (const letter of str) {
    if(letter === "_")
    canUpToUpper = true
    else if(canUpToUpper){
      strToCamelCase.push(letter.toUpperCase())
      canUpToUpper = false
    } else
    strToCamelCase.push(letter)
  }
  return strToCamelCase.join('')
}
console.log(toCamelCase());
// [tocamelCase] using const variable boolean forof iteration if condition push uppercase and join function 