console.log(function countBy(x=2,n=5) {
  return [...Array(n).keys()].map((el,i)=>(el+1)*x)
}())