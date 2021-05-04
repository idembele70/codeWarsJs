function reverseBit(n = 417) {
  const nToBinaire = n.toString(2);
  let nBinaireReversed = [];
  for (let i = 0; i < nToBinaire.length; i++) {
    nBinaireReversed.unshift(nToBinaire[i])
  }
  const nReversed = parseInt(nBinaireReversed.join``, 2);
  return nReversed
}
console.log(reverseBit());