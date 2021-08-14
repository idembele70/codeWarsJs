function sum(digits="") {
  const tabs = []
 let sum  = 0
 if(!digits.length) return"0 = 0"
 digits.split('').forEach(
    (num)=>{
      tabs.push(num ? num : 0)
      sum+= parseInt(num)
    }
    )
  return `${tabs.join` + `} = ${sum}`
}
console.log(
  sum()
)
// [sum] triying to find error