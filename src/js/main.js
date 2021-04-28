function logicalCalc(array = [true, true], op = "AND") {
  let res = Boolean();
  for (let i = 0; i < array.length; i++) {
    if (op == "AND") {
      return eval(array.join` && `);
    } else if (op == "OR") {
      return eval(array.join` |`);
    } else if (op = "XOR") {
      return eval(array.join`^`);
    }
  }
  return false;
}

console.log(logicalCalc());