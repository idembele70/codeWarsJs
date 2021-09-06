console.log(
  function calculator(a = 1, b = 2, sign = "+") {
    if (typeof a === "string" || typeof b === "string")
      return "unknown value"
    else
      switch (sign) {
        case "+":
          return a + b
        case "-":
          return a - b
        case "*":
          return a * b
        case "/":
          return a / b
        default:
          return "unknown value"
      }
  }()
);

//  [calculator] usign typeof switch