console.log(
  function reverseList(list = [1, 2, 3, 4]) {
    const newList = []
    for (let i = list.length; i > 0; i++) {
      const number = list[i]
      newList.push(number)
    }
    return newList
  }()
);
// [reverseList] using for iteration, const variable, push function from array
