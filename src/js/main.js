function paperwork(n=5,m=5) {
        if (n < 0 || m < 0) {
                return 0;
        } else {
                 return n*m;
        }
}

console.log(paperwork());