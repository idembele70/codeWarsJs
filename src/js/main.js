const array = (arr = '1,2,3') => {
 const newarr = arr.toString();
  return newarr.match(/,{2,}/g) && newarr.match(/,/g).length >=2 ? newarr.split(/,/).slice(1,-1).join` ` : null ;
}

console.log(array());