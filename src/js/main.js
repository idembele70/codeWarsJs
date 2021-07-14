console.log(
  function getDivisorsCnt(n = 10) {
return [...Array(n).keys()].map(
  x=>{
    if(!(n%(x+1))) return x+1;
    return ""
  }
).filter(el=>el!="").length
}()
);
