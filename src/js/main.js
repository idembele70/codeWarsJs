console.log(
  function isIsogram(str="Dermatoglyphics") {
  return [...str].every(
     (letter,_,arr)=>arr.indexOf(letter) === arr.lastIndexOf(letter)
   )
  }()
);

// [isIsogram] trying