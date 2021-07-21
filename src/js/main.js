console.log(function mergeArrays(arr1=[1,2,3,4,4], arr2=[5,6,7,8]) {
  return [...new Set(arr1.concat(arr2).sort(
    (a,b)=>a-b
  ))]
}())

[main] mergeArrays using set concat & sort to resolve the problem