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

console.log(
   ( (haystack= ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])=>{
        return haystack.map(x =>  x === 'needle' ? "Found the needle at position " + haystack.indexOf(x) : "").join('');
    })()
);

// les deux paire false
// si un des deux impaire true
// les deux pas paire true