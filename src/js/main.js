console.log(
  (function reverseWords(str = "apple spaced") {
    const strResversed = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
      const charAtX = str[i];
      if (charAtX == " " || i + 1 == str.length) {
        if (i + 1 == str.length) word += charAtX;
        strResversed.push(word.split``.reverse().join``);
        word = "";
      } else {
        word += charAtX;
      }
    }
    return strResversed.join` `;
  })()
);
