function generateRange(min=1,max=10,step=3) {
  const arr = []
 for (let i = min; i <= max; i+=step) {
   arr.push(i)
   
 }
 return arr
}

console.log(generateRange())

