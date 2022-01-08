function toCamelCase(str="the_stealth-warior") {
  return str.replace(/_.|-./ig, v=>v[1].toUpperCase())
}
console.log(toCamelCase());



// [toCamelCase] using replace function & toUpperCase