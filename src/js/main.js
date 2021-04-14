const grow = function(x=[1, 2, 3]){
  return x.reduce((prev,curr)=>prev*=curr)
}

console.log(grow());