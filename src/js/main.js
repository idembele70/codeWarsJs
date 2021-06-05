function openOrSenior(
  data = [
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]
) {
  return data.map((x) => x[0] >= 55 && (x[1] > 7 )? "Senior" : "Open");
}
console.log(openOrSenior());
