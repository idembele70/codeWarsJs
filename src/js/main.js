console.log(
  function sortArray(array=[5, 3, 2, 8, 1, 4]) {
    const arr = []
   return array.sort((a,b)=> a % 2 === 0 ?a : a - b)
  }()
);
// [sortArray] trying
