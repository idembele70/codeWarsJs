function sortArray(array = [1, 7]) {
  const oddTabs = [],
    newArray = [];
  let i = 0;
  array.forEach((number) => (number % 2 != 0 ? oddTabs.push(number) : null));
  oddTabs.sort((a,b)=>a-b);
  array.forEach((num) => {
    if (num % 2 != 0) {
      newArray.push(oddTabs[i]);
      i++;
    } else newArray.push(num);
  });
  return newArray;
}

console.log(sortArray([5, 8, 6, 3, 4]));
