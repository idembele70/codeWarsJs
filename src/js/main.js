String.prototype.isUpperCase = function() {
  if(this.concat().match(/[a-z]/g)) return false

  return this.concat() ?  true :  "Must define the prototype isUpperCase"
}
console.log("HELLO I AM DONALD".isUpperCase())
// [isUpperCase] using if concat & match