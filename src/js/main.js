function generateShape(integer=8) {
  return Array(integer).fill("+").map(()=>"+".repeat(integer)).join`\n`
}
console.log(generateShape());
// [generateShape] using Array Class fill map repeat and join function