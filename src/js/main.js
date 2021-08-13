function sum(digits="1056653001858539") {
  const tabs = []
 let sum  = 0
 if(digits.length) return digits
 digits.split('').forEach(
    (num)=>{
      tabs.push(num)
      sum+= parseInt(num)
    }
  )
  return `${tabs.join` + `} = ${sum}`
}
console.log(
  sum()
)
// encour