function getDivisorsCnt(n=4) {
  let length = 0
  for (let i = 1; i <= n; i++) {
    if(n%i === 0) length++ 
  }
  return length
}
console.log(getDivisorsCnt());
// [getDivisorsCnt] using let variable concactenation and for iteration