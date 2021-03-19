const sumnation = function(num=3){
  let acc = null;
for (let i = 1; i < num; i++) {
  acc+=i
}
return acc
}

console.log(sumnation());