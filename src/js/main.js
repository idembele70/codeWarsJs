function solution(roman = 'XXI') {
  let number = 0;
  roman = roman.split('')
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === "M") {
      // number += 1000
      roman[i] =1000;

    } else if (roman[i] === "D") {
      // number +=500;
      roman[i] = 500;
    } else if (roman[i] === "C") {
      roman[i] = 100;
    } else if (roman[i] === "L") {
      // number+= 50;
      roman[i] = 50;
    } else if (roman[i] === "X") {
      // number+= 10;
      roman[i] =10;

    } else if (roman[i] === "V") {
      // number+= 5;
      roman[i] =5;

    } 
    else if (roman[i] === "I") {
      // number+= 1;
      roman[i] =1;

    } 
  }

  for (let j = 0; j < roman.length; j++) {
    if (roman[j] >= roman[roman.indexOf(roman[j])+1] || !Number.isInteger(roman[roman.indexOf(roman[j])+1]))  {
      number += roman[j];
    } else if(roman[j] < roman[roman.indexOf(roman[j])+1])  {
      number -= roman[j]
    } else {
    }
    
  }
  return number;
}

console.log(solution());