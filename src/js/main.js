function filter_list(l=[1,2,"O","123"]) {
  const filteredList = []
  l.forEach(element => {
    if(typeof element !== "string")
    filteredList.push(element)
  });
  return filteredList
}
console.log(filter_list());

