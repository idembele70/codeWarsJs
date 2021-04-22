class FindIt {
  static firstNonConsecutive(arr = [ 1,2,3 ]) {
    let NumberNonConsecutive = arr.filter((val, pos) => {
      return arr[pos - 1] != null && val - 1 != arr[pos - 1]
    })
    return NumberNonConsecutive.length == 0 ? null : parseInt(NumberNonConsecutive)
  }
}

console.log(FindIt.firstNonConsecutive());