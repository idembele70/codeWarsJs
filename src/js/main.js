
function isLeapYear(year = 2000) {
  return year % 400==0 || year % 4==0  && year % 100 != 0}

console.log(isLeapYear());

console.log(
  1984 % 100,
  1984 % 4,
  1984 % 400,
  true
)
console.log(
  1234 % 100,
  1234 % 4,
  1234 % 400, false
)