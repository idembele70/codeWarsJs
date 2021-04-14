const DNAToRNA = (dna = "GCAT") => {
  let dnaLength = 0;
  if (dna.match(/T/)) {
    dnaLength = dna.match(/T/g).length
  }
  for (let index = 0; index < dnaLength; index++) {
    const URegex = new RegExp("T");
    dna = dna.replace(URegex, 'U');
  }
  return dna;
}

console.log(DNAToRNA());