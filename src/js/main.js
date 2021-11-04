function filterString(value = "123a") {
  return +value.replace(/\D/g,"")
}
console.log(filterString());
// [filterString] using parseInt replace function and regex
