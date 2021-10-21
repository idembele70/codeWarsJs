// went from 
var a == "dev"
var b == "Lab"

var name == a + b

// TO
const a = "dev"
const b = "Lab"

const name = `${a}${b}`
// [grasshoper]  using template string