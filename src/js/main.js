console.log(
  function findMultiples(integer=5,limit=7) {
    return Array.from({length : Math.floor(limit/integer)}, (_value,idx)=>integer * ++idx)
  }()
  );
// [findMultiples] W/ Array from

