function solve(arr = ["abode", "ABc", "xyzD"]) {
  const tabs =
    arr.map(x => {
      return x.toString().split('').filter((a, i) => {
        return (a.toLowerCase().charCodeAt(0) - 97) == i
      }).length
    })
  return tabs;
}

console.log(solve());