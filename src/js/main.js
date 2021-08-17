String.prototype.toAlternatingCase = function () {
  let alternatedString = ""
  for (let i = 0; i < this.length; i++) {
    const currentLetter = this.charAt(i);
    if(currentLetter === currentLetter.toUpperCase())
    alternatedString += currentLetter.toLowerCase()
    else
    alternatedString += currentLetter.toUpperCase()
  }
  return alternatedString
}

console.log("hello worlD".toAlternatingCase());

// [toAlternatingCase] using for