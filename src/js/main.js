const sum = (numbers=[1, 5.2, 4, 0, "-1"]) => numbers.length ? numbers.reduce((acc,cur)=>acc+=cur) : 0

console.log(sum());
