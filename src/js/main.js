class RemoveClass {
    remove(s="hii !"){
  const re = s.lastIndexOf(s.match(/!/))
    return s.replace(s.charAt(re), '')

    }
}
const Myremove = (new RemoveClass);
/* console.log((Myremove.remove()));

console.log((Myremove.remove("Hi!") ), "resultat : Hi"); 
console.log((Myremove.remove("Hi!") ), "resultat : Hi"); 
console.log((Myremove.remove("Hi!!!") ),"resultat : Hi!!");
console.log((Myremove.remove("!Hi") ), "resultat : !Hi");
console.log((Myremove.remove("!Hi!") ), "resultat : !Hi");
console.log((Myremove.remove("Hi! Hi!") ), "resultat : Hi! Hi");
console.log((Myremove.remove("Hi")) , "resultat : Hi"); */


// 

const cockroachSpeed = function(s){
    return ~~(s/3.6*100);
}

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);