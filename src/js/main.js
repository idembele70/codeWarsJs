console.log(
  function reverseList(list = [1, 2, 3, 4]) {
    const { length: listLength } = list
    return Array.from({length : listLength},(_number,idx)=>list[listLength - idx - 1])
  }()
);
// [reverseList] using Array from destructuration and function inside array from
