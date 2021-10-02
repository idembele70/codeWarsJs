function htmlspecialchars(formData = "Hello, how would you &amp; I fare?") {
  const data = {
    "&lt;": "<",
    "&gt;": ">",
    "& quot;": "\"",
    "&amp;": "&"
  }
  return formData.split(' ').map(
    word=>data[word] || word
  )
}
console.log(htmlspecialchars().join(' '));
// [htmlspecialChars] trying