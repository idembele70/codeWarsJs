console.log(
  function strong(n=145) {
    return [...n.toString()].map(
      factorielle
    ).reduce((acc,curr)=>acc+curr,0) === n ? "STRONG!!!!" : "Not Strong !!" 
  }()
);
function factorielle(n) {
  return Array(+n).fill(1).reduce(
    (acc,curr,idx)=>acc*(idx+curr),1
  )
}
// [strong] using toString, rest function inside function map reduce array and fill

