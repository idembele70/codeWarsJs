const validSpacing = (s = "K  World") => {
  return !s.match`^ | $| {2,}`
}

console.log(validSpacing());