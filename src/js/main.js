function removeChars(s=".tree1 A") {
  const keepedChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
  let res = ""
  for (const letter of s) {
    if(keepedChars.indexOf(letter) != -1)res+=letter
  }
  return res
}
console.log((removeChars()));
// [removeChars] using constante, let, forof iteration indexOf function and string concactenation

