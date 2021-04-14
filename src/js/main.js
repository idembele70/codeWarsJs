const grow = function (x = [1, 2, 3]) {
  let res =0;
  for (let a = 0; a < x.length; a++) {
    res *= x[a]
    if (a + 1 == x.length) return res;
  }
}

console.log(grow());