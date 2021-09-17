console.log(
  function shortcut(string = "codewArs") {
    return [...string].filter(
      vowelsFinder
    ).join``
  }()
);
function vowelsFinder(char="") {
  const vowels = ["a", "e", "u", "i", "o"]
  return vowels.indexOf(char) === -1
}
// [shortcut] filter and two functions