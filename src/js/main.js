function isVow(a=[118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]) {
  const char = (number)=> String.fromCharCode(number);
  return a.map(x=>/[aeiou]/.test(char(x)) ? char(x) : x) 
}

console.log(isVow())

