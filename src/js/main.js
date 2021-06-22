function closeCompare(a=3,b=5, margin=3) {
  margin = margin == undefined  || margin < 0  ? 0 : margin ;
  return a - b < margin && margin !=0 ? 0 : a > b ?  -1 : 1
}
console.log(closeCompare());