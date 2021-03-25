function fakeBin(x='45385593107843568') {
    let strToBin = '';
    x.split('').forEach(element => {
       strToBin += element < 5 ? 0 : 1;
   });
   return strToBin
}

console.log(fakeBin());