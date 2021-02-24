function positiveSum(arr=[]) {
return arr.reduce((acc,arr)=> acc + (arr > 0 ? arr: 0),0)
}
console.log(positiveSum());
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));