function toCamelCase(str="the_stealth_warrior") {
  return str.split(/[_-]/).map((x,i)=>i!=0 && x.replace(x[0],v=>v.toUpperCase()) || x).join('')
}
console.log(toCamelCase());
// [tocamelCase] using split map replace toUpperCase && join functions