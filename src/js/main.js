console.log(
  function median(array = [33, 99, 100, 30, 29, 50]) {
    array = array.sort((a, b) => a -b)
    const { length } = array
    return length % 2 !== 0 ? array[(length -1) / 2] : (array[length / 2] + array[length / 2 -1])/2
  }()
);
// [median] using sort destructuring object