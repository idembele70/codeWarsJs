function usdcny(usd=15) {
  return `${(usd*6.75).toFixed(2)} Chinese Yuan`
}
console.log(usdcny());
// [usdcny] using toFixed and template string