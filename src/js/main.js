class Abbreviation {
        abbrevName(name='Jason Mason'){
                const AZ = new RegExp('[A-Z]','i')
               return  name.split` `.join(x=>x.match(AZ))
        }
}

const premierAbrreviation = new Abbreviation;

console.log(premierAbrreviation.abbrevName("Sam Harris"), "S.H");
console.log(premierAbrreviation.abbrevName("Patrick Feenan"), "P.F");
console.log(premierAbrreviation.abbrevName("Evan Cole"), "E.C");
console.log(premierAbrreviation.abbrevName("P Favuzzi"), "P.F");
console.log(premierAbrreviation.abbrevName("David Mendieta"), "D.M");