function nbYear(p0=1500, percent=5,aug=100,p=5000) {
  let i = 0
  do {
    p0 = p0 + p0 * percent/100 + aug;
    i++
  } while (p0 < p );
  return i
}

console.log(nbYear());