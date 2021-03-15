const stringToNumber = (str="-1234")=>{
 if (!Number.isInteger(str)) {
   return parseInt(str)
 }
}
console.log(stringToNumber());