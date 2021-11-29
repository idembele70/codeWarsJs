function getDivisorsCnt(n=4) {
  return [...Array(n)].map((_,idx)=>++idx).filter(
    (x)=>n % x === 0).length
}
console.log(getDivisorsCnt());
// [getDivisorsCnt] using map Arry classes filter and length functions