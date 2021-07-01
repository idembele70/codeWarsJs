function stringToArray(string = "Robin Singh") {
  const result = [];
  let word = "";
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (currentChar == " ") {
      result.push(word);
      word = "";
    } else word += currentChar;
  }
  result.push(word);
  return result;
}

console.log(stringToArray());
