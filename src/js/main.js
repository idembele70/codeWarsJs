const abbrevName = (name="ibrahim Dembele") =>{
        let result ="";
       name = name.split(' ').forEach(element => {
              result+= element[0].toUpperCase();
       });;
       return result.split('').join('.') ;
}

console.log(abbrevName("eliza doolittle"), "E.D"); // BASIC

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");