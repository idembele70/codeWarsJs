function digital_root(n = 493193) {
  let resultat = 0, i = 0;
  nLength = n.toString().length;
  while (!!i <= nLength) {
    n.toString().split('').forEach(element => {
      resultat += parseInt(element);
    });
    n = resultat;
    resultat = 0;
    if (n.toString().length == 1) {
      return n;
    }
    ++i;
  }

}

console.log(digital_root());