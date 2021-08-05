console.log(
  function all(arr=[1,2,3,4,5,10],fun= function(v){return v<9}) {
  return arr.every(fun)   
  }()
);

