function removeChars(s=".tree1 A") {
  return s.replace(/[^a-z ]/ig, "")
}
console.log((removeChars()));
// [removeChars] using regex replace 

