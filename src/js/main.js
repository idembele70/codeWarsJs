function twoSort(s=["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) {
 const array = Array.from(s.sort()[0])
 return array.join('***')
}

console.log(twoSort())

