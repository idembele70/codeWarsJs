function squareSum(numbers=[2,3,5]) {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
                result += numbers[i]*numbers[i];
                  if (i+1 === numbers.length) {
                          return result
                  }
        }
        // return result

}

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([-14,-9,0,-16,-18,-18,0,1]), 1182)