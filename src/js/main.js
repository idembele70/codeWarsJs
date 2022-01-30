console.log(
  function sortByBit(array=[30,0]) {
    return array.map(el=>2**el).reduceRight(
      (a,c)=>a+=c,0
    )
  }()
);


// [sortByBit] using map iteration and reduceRight map