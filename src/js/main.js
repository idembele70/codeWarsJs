const validSpacing = (s = "K  World") => {
  return !(/^ /.test(s) || / $/.test(s) || / {2,}/.test(s))
}

console.log(validSpacing());