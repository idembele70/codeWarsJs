function toCamelCase(str="the_stealth_warrior") {
  return str.replace(/_./ig,v=>v[1].toUpperCase())
}
console.log(toCamelCase());
// [tocamelCase] using replace and uppercase functions