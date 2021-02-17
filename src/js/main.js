function solution(string='case Week GreatGroup') {
  const delSpace = new RegExp(' ','g');
  string = string.replace(delSpace,'');
  const regAZ = /[A-Z]/g;
  const letterUpercasse = string.match(regAZ);
  if (letterUpercasse) {
 return  string.split(' ');
    for (let i = 0; i < letterUpercasse.length; i++) {
      let addSpace = ' '+ letterUpercasse[i];
      string = string.replace(letterUpercasse[i], addSpace);
    }
  }
  return string;
}
console.log(solution());

