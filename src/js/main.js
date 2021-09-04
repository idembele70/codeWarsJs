function digitize(n=35231) {
  return [...n.toString()].reverse().map(Number)
}
 console.log(digitize()); ;
// [digitize] W/ rest 
