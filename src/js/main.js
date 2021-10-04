console.log(
  function decodePass(passArr=['password123', 'admin', 'admin1'], bin="01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011") {
   const binToString = bin.split(' ').reduce(
     (acc,curr)=>acc+= String.fromCharCode(
       parseInt(curr,2)
     ),""
   )
     for (const pass of passArr) {
     if(binToString === pass) return pass
   } 
   return false
  }()
);
// [decodePass] using split reduce String FromCharCode parseInt and forof iteration

