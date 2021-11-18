function add(n) {
  return (a)=>+a +n
}
const addOne = add(1)
addOne(3)
console.log(addOne(2));
// [add] using function inside return 