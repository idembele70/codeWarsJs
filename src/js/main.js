document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";
let string ='sak';
let minVal, minMedVal, result;
function sumTwoSmallestNumbers(numbers) {  
    for (let i = 0; i <= numbers.length; i++) {
        let numbersToInt = parseInt(numbers[i]);
        if (Number.isInteger(numbersToInt) && numbersToInt >= 0) {
            if (Number.isInteger(minVal)) {
                minVal = Math.min(minVal, numbersToInt);
            } else {
                minVal = numbersToInt;
            }
        }
    }
   let  toDel = numbers.indexOf(minVal);
    numbers.splice(toDel, 1);
    for (let j = 0; j < numbers.length; j++) {
        let numbersToInt = parseInt(numbers[j]);
        if (Number.isInteger(numbersToInt) && numbersToInt >= 0) {
            if (Number.isInteger(minMedVal)) {
                minMedVal = Math.min(minMedVal, numbersToInt);
            } else {
                minMedVal = numbersToInt;
            }
        }
    }
    result = minVal + minMedVal;
    return result;;
}

// console.log(sumTwoSmallestNumbers([2, 270, 32, 1, 22]));
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 );
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6);
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 );
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24);
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16);


