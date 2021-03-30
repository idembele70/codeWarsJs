/* 
__ beginner series #2 Clock 
*/


const past = (h = 0, m = 1, s = 1) => {
    const hourToSecondes = h * 3660,
        minuteToSecondes = m * 60,
        seconde = s,
        secondeToMilliseconde = 1000;
    return (hourToSecondes + minuteToSecondes + seconde) * secondeToMilliseconde;
}

console.log(past());
console.log(past(1, 0, 1));

