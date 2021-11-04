function filterString(value = "123a") {
  return parseInt([...value].map(Number).filter(
    number=>!Number.isNaN(number)
  ).join``)
}
console.log(filterString());
// [filterString] using parseInt replace function and regex
