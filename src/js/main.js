function generateShape(integer=8) {
  const square = []
  for (let i = 0; i < integer; i++) {
    let line = ""
    for (let j = 0; j < integer; j++) {
      line += "+"
    }
    if(i + 1 != integer)
    line+= "\n"
    square.push(line)
  }
  return square.join('')
}
console.log(generateShape());
// [generateShape] using const and let variable, for iteration, push join functions