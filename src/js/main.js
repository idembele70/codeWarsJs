function cleanString(s = "abc#d##c") {
  const cleanedString = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#") {
      if (cleanedString == "") {

      } else {
        cleanedString.pop()
      }
    } else {
      cleanedString.push(s[i])
    }
  }
  return cleanedString.join``;
}
console.log(cleanString());