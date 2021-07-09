console.log(function countBy(x=2,n=5) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i*x)
  }
  return res
}())