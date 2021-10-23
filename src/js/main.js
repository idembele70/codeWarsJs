console.log(
  function reverseList(list = [1, 2, 3, 4]) {
    const { length: listLength } = list
    return Array(listLength).fill(1).map(
      (_, idx) => list[listLength - ++idx]
    )
  }()
);
// [reverseList] using Array fill map destruction of Object and Array Classes
