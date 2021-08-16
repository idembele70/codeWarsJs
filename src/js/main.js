console.log(
  function isDigit(s="-234.4") {
    return parseFloat(s) == s || parseInt(s) == s
  }()
)
// [isDigit] using parsefloat et parseint