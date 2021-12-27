 const arr = [1, 2, 4]
const arr2 = [2, 4, 3, 5]
const m = (n) => n+1
const n = m(arr.length)
const array = new Array(n).fill(1).map(
  (x,idx)=>x+idx
)
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if(arr.indexOf(element) === -1){
  console.log(element)
  break;
  }
}

// [codinggame exo] done using new Array classes fill map indexOf and console.log