function fakeBin(x='45385593107843568') {
    xToBin = ''
 for (let i = 0; i < x.length; i++) {
     if (x[i] < 5) {
       xToBin += 0;
    } else {
        xToBin += 1;
     }
    }
    return xToBin;
}

console.log(fakeBin());