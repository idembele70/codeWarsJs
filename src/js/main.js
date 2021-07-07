function numberToPower(number = 4, power = 2) {
  return [...Array(power)].reduce(
    (acc,curr)=>acc*=curr || number , 1
  );
}
console.log(numberToPower());
