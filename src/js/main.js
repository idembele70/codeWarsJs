function solution(string='camelCaseRo') {
  const regAZ = /[A-Z]/g; let result ='';
for (let i = 0; i < string.length; i++) {
  if (string.charAt(i).match(regAZ)) {
    result +=  ' ' + string.charAt(i);
    string = string.replace(string.charAt(i),result)
  }
}
return string;
}
console.log(solution());