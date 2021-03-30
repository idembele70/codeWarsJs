const getAverage = function (marks = [2, 2, 2, 2]) {
    let result = null;
    for (const note of marks) {
       result += note;
    }
    return  Math.floor(result / marks.length);
}
console.log(getAverage());
console.log(getAverage([1, 2, 3, 4, 5,]));