function squareSum(numbers=[2,3,5]) {
        let result = 0,i= 0;
       while (i < numbers.length) {
               result += Math.pow(numbers[i],2);
               i++
       }
       return result;

}

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([-14,-9,0,-16,-18,-18,0,1]), 1182)