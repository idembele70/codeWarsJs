console.log(
  (function reverseWords(str = "apple spaced") {
    return str.split(" ").map((x) => [...x].reverse().join("")).join` `;
  })()
);
