function min(list = [-52, 56, 30, 29, -54, 0, -110]) {
  return list.sort((a, b) => a - b)[0]
}
function max(list = [-52, 56, 30, 29, -54, 0, -110]) {
  return list.sort((a, b) => a - b)[list.length - 1]
}

console.log(min());
console.log(max());