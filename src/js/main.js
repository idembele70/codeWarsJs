const DNAToRNA = (dna="GCAT")=>{
  return dna.replace(/T/g,'U');
}

console.log(DNAToRNA());