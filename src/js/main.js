function htmlspecialchars(formData = "<h2>Hello World</h2>") {
  const data = {
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "&": "&amp;"
  }
  return formData.split('').map(
    word=>data[word] || word
  ).join('')
}
console.log(htmlspecialchars());
// [htmlspecialChars] using object split map and join