function logicalCalc(array = [true, true], op = "AND") {
  if (op == "AND") {
    return eval(array.join` && `);
  } else if (op == "OR") {
    return eval(array.join` |`);
  } else if (op = "XOR") {
    return eval(array.join`^`);
  }
}

console.log(logicalCalc());