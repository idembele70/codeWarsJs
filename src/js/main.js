function filterString(value = "123a") {
  const filteredString = []
  for (let n = 0; n < value.length; n++) {
    const number = +value[n]
    if(Number.isInteger(number))
    filteredString.push(number)
    
  }
  return Number(filteredString.join``)
}
console.log(filterString());
// [filterString] using const variable for iteration Number classes isinteger push and join functions
