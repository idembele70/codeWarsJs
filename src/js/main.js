function fizzbuzz(n = 3) {
  return [...Array(n).keys()].map((number) => {
    switch (true) {
      case !((number+1) % 3) && !((number+1) % 5):
        return (number = "FizzBuzz");
      case !((number+1) % 3):
        return (number = "Fizz");
      case !((number+1) % 5):
        return (number = "Buzz");
      default:
        return ++number;
    }
  });
}
console.log(fizzbuzz());


