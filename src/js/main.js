function printerError(s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") {
  return [...s].filter(
    x => x > "m"
  ).length+"/"+s.length
}

console.log(printerError());

// [printerError] using rest filter function and length method