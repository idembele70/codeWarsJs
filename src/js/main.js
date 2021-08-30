function filterNumbers(str="aa1bb2cc3dd") {
  return str.replace(/\d/g,"")
}
console.log(filterNumbers());
// [filterNumbers] using template string