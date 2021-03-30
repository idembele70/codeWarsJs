const getAverage = function(marks=[2,2,2,2]){
    return Math.floor(marks.reduce((acc,val) => acc+=val) / marks.length);
}
console.log(getAverage());
console.log(getAverage([1,2,3,4,5,]));