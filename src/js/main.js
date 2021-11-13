function generateShape(integer=8) {
  return Array.from({length : integer}, ()=>"+".repeat(integer)).join(`\n`)
}
console.log(generateShape());
// [generateShape] using Array Class fill map repeat and join function