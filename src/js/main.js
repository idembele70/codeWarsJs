function correctTail(bod="Fox", tail="x") {
  const sub = bod.substr(bod.length - tail.length)
  if (sub === tail)
    return true
  else
    return false
}

console.log(correctTail())
// [correctTail] using substr
