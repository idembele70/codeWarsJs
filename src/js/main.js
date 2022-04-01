console.log(
  function sortArray(array=[5, 3, 2, 8, 1, 4]) {
   return array.sort((a,b)=> a % 2 === 0 ?a : a - b)

  }()
);
// [getAge] trying
