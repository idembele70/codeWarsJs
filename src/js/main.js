function solve(s="cODE") {
  const lower = [], upper=[]
   s.split('').forEach(
    letter=>letter.match(/[a-z]/) ? lower.push(letter): upper.push(letter)
  )
  switch (true) {
    case lower.length < upper.length:
      return s.toUpperCase()
    case lower.length > upper.length:
      return s.toLowerCase()
    default:
      return s.toLowerCase()
  }
}
console.log(solve());
// [solve] using split foreach match push toUpperCase ToLowerCase functions and switch condition
