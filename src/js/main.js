/* function logicalCalc(array = [true, true, true, false], op = "AND") {

  switch (op) {
    case "AND":
      array.join` `.match(/false/);
      return true
    case "XOR":
    case "OR":
      array.match(/true/);
      return true

    default:
      return "Your operator doesn't exist !"
  }
}

console.log(logicalCalc()); */

function distanceBetweenPoints(a = { x: 3, y: 3 }, b = { x: 3, y: 3 }) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

console.log(distanceBetweenPoints());