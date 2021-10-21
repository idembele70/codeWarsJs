// went from 
var a == "dev"
var b == "Lab"

var name == a + b

// TO
const a = "dev", b = "Lab" , name = `${a}${b}`
// [grasshoper] using template string one const for many variable