function decode(message = "r slkv mlylwb wvxlwvh gsrh nvhhztv") {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ]
  return [...message].map(
    x => {
      if (x != " ") {
        let replace= 25-alphabet.indexOf(x)
        return alphabet.slice(replace++,replace)
      }
      return x
    }
  ).join('')
}
console.log(decode());
// [decode] using let variable destructuration map indexOf slice and join functions
