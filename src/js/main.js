function solution(roman ='IV' ) {
  let number = 0;
  roman.split('').forEach(element => {
    if (element === "M") {
      number += 1000
    } else if (element === "D") {
      number +=500;
    } else if (element === "C") {
      number+= 100;
    } else if (element === "L") {
      number+= 50;
    } else if (element === "X") {
      number+= 10;
    } else if (element === "V") {
      number+= 5;
    } else if (element === "I") {
      number+= 1;
    } 
  })
  return number;
}

console.log(solution());