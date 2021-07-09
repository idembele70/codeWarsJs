console.log(function countBy(x=2,n=5) {
  return [...Array(n)].map((el,i)=>(i+1)*x)
}())