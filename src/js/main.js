console.log(
  function distinct(a=[1,1,2]) {
    return a.filter(
      (number,idx,newArr)=>newArr.indexOf(number) === idx
    )
  }
);
// [distinct] using Array filter, indexOf function 
