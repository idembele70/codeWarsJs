console.log(
  function reverseWords(str="double  spaced  words") {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }()
)
// [filterLongWord] using split reverse and join