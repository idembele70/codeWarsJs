function openOrSenior(
  data = [
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]
) {
    const tabs = []
  for (let i = 0; i < data.length; i++) {
      tabs.push(
          data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open"
      )
      
  }
  return tabs
}
console.log(openOrSenior());
