console.log(
  function remainder(a = 17, b = 5) {
    if (!(a || b)) return NaN
    else {
      if (a > b)
        return a % b
      return b % a
    }
  }()
);
// [remainder] using if conditions else and return and modulo operator
