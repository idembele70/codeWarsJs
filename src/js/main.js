class Kuy {
  invert (array=[1,2,-4]){
    return array.map(x => -x);
  }
}

const maKuy = new Kuy;
console.log(maKuy.invert());