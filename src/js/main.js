document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";
// function isPangram(string = "The quick brown fox jumps over the lazy dog."){
// const reg = /[a-z]/gi;
//    return reg.exec();
// }

// console.log(isPangram());

var re = /[0-9]+/g;
var str = '2016-01-02';
var resultat = re[Symbol.matchAll](str);

console.log(Array.from(resultat, x => x[0]));