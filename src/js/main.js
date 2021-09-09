String.prototype.isUpperCase = function () {
  for (let i = 0; i < this.length; i++) {
    const currentChar = this[i]
    console.log(currentChar);
    if (!currentChar.match(/[a-z]/)) continue
    else return false
  }
  return !this.length ? "Must define the prototype isUpperCase" : true
}
console.log("HELLO I AM DONALD".isUpperCase())
// [isUpperCase] using if for & match