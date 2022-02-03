function digitize(n=123) {
  return Array((n+"").length).fill(1).map(
    (_,idx)=>+n.toString()["charAt"](idx)
  )
}
console.log(digitize());
// [digitize] using toString charAt