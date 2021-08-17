String.prototype.toAlternatingCase = function () {
  return [...this].map(letter=>
    letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('')
}

console.log("hello worlD".toAlternatingCase());

// [toAlternatingCase] using lowerCase upperCase Map ....