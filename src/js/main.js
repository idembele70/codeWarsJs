function closeCompare(a = 2, b = 5, margin) {
  return Math.abs(a - b) <= margin ? 0 : Math.sign(a - b)
}

//without margin
console.log(closeCompare(4, 5), -1);
console.log(closeCompare(5, 5), 0);
console.log(closeCompare(6, 5), 1);
console.log(closeCompare(-6, -5), -1);
// back to line
console.log("\n");
// with margin
console.log(closeCompare(2, 5, 3), 0);
console.log(closeCompare(8.1, 5, 3), 1);
console.log(closeCompare(1.99, 5, 3), -1);
console.log(closeCompare(-6460, -8422, 7606), 0);
