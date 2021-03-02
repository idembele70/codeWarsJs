class digit {
     digitize(n=123435) {
        return n.toString().split('').map(x => parseInt(x)).reverse();
        }
}

const monDigit = new digit;

console.log(monDigit.digitize())