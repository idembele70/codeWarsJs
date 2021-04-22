class FindIt {
  static firstNonConsecutive(arr = [9, 10, 11, 12, 13, 14, 15, 16, 17]) {
    let pre = 'str', finalVal = true;
    for (let i = 0; i < arr.length; i++) {
      if (pre == 'str') {
        pre = arr[i];
        continue
      } else if (pre != arr[i]-1) {
        pre = arr[i];
        finalVal = false;
        break;
      } else {
        pre = arr[i]
        continue
      }
    }
    return finalVal ? null : pre
  }
}

console.log(FindIt.firstNonConsecutive());