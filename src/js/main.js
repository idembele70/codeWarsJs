function add(n) {
  return (a)=>!Number.isNaN(a) ? +n : n
}
const addOne = add(1)
addOne(3)
console.log(addOne(2));
// [add] using Number class isNan function 