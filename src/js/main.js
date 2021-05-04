function reverseBit(n = 417) {
  const nToBinaire = n.toString(2);
  let nBinaireReversed = [];
  for (let i = nToBinaire.length; i >= 0; i--) {
    nBinaireReversed.push(nToBinaire[i])
  }
  const nReversed = parseInt(nBinaireReversed.join``, 2);
  return nReversed
}
console.log(reverseBit());