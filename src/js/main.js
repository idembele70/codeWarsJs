function stray(numbers=[1,1,2]) {
  return Number(numbers.filter(
    (number, idx)=> numbers.lastIndexOf(number) === idx && numbers.indexOf(number) === idx
  ).join``)
}
console.log(stray());
// [stray] using Number classes filter lastIndexOf indexOf & logic and join function
