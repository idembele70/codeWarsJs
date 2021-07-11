console.log(
  (function first(arr = ["a", "b", "c", "d", "e"], n = 3) {
    const alphabet =  Array.from([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]);
    if (n == 0) return [];
    return alphabet.splice(0, n);
  })()
);
