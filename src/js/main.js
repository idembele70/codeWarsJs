function solve(arr = ["abode", "ABc", "xyzD"]) {
  const symetryTabs = []; let currIndex = 0;
  for (const alphabetString of arr) {
    symetryTabs.push(0)
    for (let i = 0; i < alphabetString.length; i++) {
      const character = alphabetString[i].toLowerCase();
      const charPosition = character.charCodeAt(0) - 97;
      if (charPosition === i) {
        symetryTabs[currIndex]++;
      }
    }
    currIndex++
  }
  return symetryTabs
}

console.log(solve());