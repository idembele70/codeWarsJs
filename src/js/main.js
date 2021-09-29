function twoHighest(arr = [20, 17, 17,18]) {
  const arrSorted = arr.filter(
    (x,i,array)=>array.indexOf(x) === i 
  ).sort(
    (a,b)=>a-b
  )
  return arrSorted.slice(-2).reverse()
}
const result = twoHighest()
console.log(result);
// [twoHighest] using filter sort slice
