console.log(
  function fizzbuzz(n=1) {
    switch (true) {
      case !(n % 5 && n % 3) :
        return "FizzBuzz"
      case n % 5 === 0:
        return "Buzz"
      case !(n % 3) :
        return "Fizz"
      default:
        return "Not Fizz nor Buzz"
    }
  }()
);
// [fizzbuzz] using swtich and return