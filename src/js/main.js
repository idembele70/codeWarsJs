/* 
__ beginner series #2 Clock 
*/


const past = (h = 0, m = 1, s = 1) => {
    return (h * 3600 + m * 60 + s) * 1000;
}

console.log(past());
console.log(past(1, 0, 1));

