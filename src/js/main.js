class Average {
  static find_average(array = [1, 1, 1]) {
    return array.reduce((a, u)=>a+=u) / array.length;
  }
}

console.log(Average.find_average());