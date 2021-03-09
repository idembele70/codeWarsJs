class RemoveClass {
    remove(s="hii ! hi!"){
    return s.replace(/!$/, '');
    }
}
const Myremove = (new RemoveClass);
console.log((Myremove.remove()));
/* 
console.log((Myremove.remove("Hi!") ), "resultat : Hi"); 
console.log((Myremove.remove("Hi!") ), "resultat : Hi"); 
console.log((Myremove.remove("Hi!!!") ),"resultat : Hi!!");
console.log((Myremove.remove("!Hi") ), "resultat : !Hi");
console.log((Myremove.remove("!Hi!") ), "resultat : !Hi");
console.log((Myremove.remove("Hi! Hi!") ), "resultat : Hi! Hi");
console.log((Myremove.remove("Hi")) , "resultat : Hi"); */


