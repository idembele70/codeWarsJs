function sortVowels(s = "Codewars") {
  const tabs = [];
  if (s!=undefined && s.toString().match(/[a-z]/gi)) {
    for (let i = 0; i < s.length; i++) {
      if (s[i].match(/[aeuio]/i)) {
        tabs.push(`|${s[i]}`);
      } else {
        tabs.push(`${s[i]}|`);
      }
    }
    return tabs.join`\n`
  }
    return "";
}
console.log(sortVowels("Codewars"));

