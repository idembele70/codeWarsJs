document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";
let string = 'sak';

function sumTwoSmallestNumbers(numbers = [1, 2, 4, 5]) {
    let min = Number.MAX_SAFE_INTEGER,
        secondMin = Number.MAX_SAFE_INTEGER;

        let n;
        for (let i = 0; i < numbers.length; i++) {
            n = numbers[i];
            if (n < min) {
                secondMin = min;
                min = n;
            } else if (n < secondMin) {
                secondMin = n;
            }
            
        }
        return min + secondMin;
}


// console.log(sumTwoSmallestNumbers([1, 7, 2,222, 112, 232]));



console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13);
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6);
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10);
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24);
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16);


