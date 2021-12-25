const arr = [1, 2, 4]
const arr2 = [2, 4, 3, 5]
const m = (n) => n+1
const n = m(arr2.length)
const array = new Array(n).fill(1).map(
  (x,idx)=>x+idx
)
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(arr[element])
}

// [codinggame exo] trying