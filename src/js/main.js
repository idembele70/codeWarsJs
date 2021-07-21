console.log(
  (function mergeArrays(arr1 = [1, 2, 3, 4, 4], arr2 = [5, 6, 7, 8]) {
    return [...arr1,...arr2].filter(
      (x,i,arr)=>arr.indexOf(x) === i 
    ).sort((a,b)=>a-b)
  })()
);
/*
[main] mergeArrays using destructuring filter and sort to resolve the problem
*/
