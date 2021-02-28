class ikd {
     countSheeps(arrayOfSheep=[true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ]){
  // TODO May the force be with you
  let compteur =0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]===true) {
          compteur++
      }
      
  }
  return compteur;
}
}
let lh = new ikd;
console.log(lh.countSheeps())