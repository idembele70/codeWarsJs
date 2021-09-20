function add(n=1) {
  return (addToN)=>n+addToN
}
const addOne = add(4)
console.log(addOne(2));
// [add] using func in func
