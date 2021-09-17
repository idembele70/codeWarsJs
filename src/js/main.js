console.log(
  function shortcut(string = "codewArs") {
    let StringWOutVowels = ""
    for (const letter of string) {
      if (!(/a|e|u|i|o/.test(letter)))
        StringWOutVowels += letter
      else continue
    }
    return StringWOutVowels
  }()
);

// [shortcut] for iteration