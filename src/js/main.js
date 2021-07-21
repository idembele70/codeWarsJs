console.log(
  (function mergeArrays(arr1 = [1, 2, 3, 4, 4], arr2 = [5, 6, 7, 8]) {
  const arrays = [...arr1,...arr2], newArray = []
  for (const number of arrays) {
    if (newArray.indexOf(number) === -1)newArray.push(number);
  }
  return newArray.sort((a,b)=>a-b) 
  })()
);
