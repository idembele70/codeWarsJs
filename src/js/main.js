function squareSum(numbers=[2,3,5]) {
        return numbers.reduce((acc,i)=>{return acc+= Math.pow(i,2)},0)

}

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([-14,-9,0,-16,-18,-18,0,1]), 1182)