class Average {
  static find_average(array = [1, 1, 1]) {
    let sum = 0
    for (const i of array) {
      sum +=i
    }
    return sum / array.length;
  }
}

console.log(Average.find_average());