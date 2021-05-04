function reverseBit(n = 417) {
  const nToBinaire = n.toString(2);
  let nBinaireReversed = "";
  for (let i = nToBinaire.length; i > 0;) {
    i--
    nBinaireReversed += nToBinaire[i];
  }
  console.log(nBinaireReversed);
  const nReversed = parseInt(nBinaireReversed, 2);
  return nReversed;
}
console.log(reverseBit());