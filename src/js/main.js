console.log(
  function reverseList(list = [1, 2, 3, 4]) {
    const listReversed = []
    for (const number of list) {
      listReversed.unshift(number)
    }
    return listReversed
  }()
);
// [reverseList] using forOf iteration and unshift function
