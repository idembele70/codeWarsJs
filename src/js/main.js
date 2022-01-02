function filter_list(l=[1,2,"O","123"]) {
  const filteredL = []
  for (const iterator of l) {
    if(typeof(iterator) === "number")
    filteredL.push(iterator)
  }
  return filteredL
}
console.log(filter_list());
// [solution] using const varaible forof typeof array push function