console.log(
  function distinct(a=[1,1,2]) {
    const aFiltered = []
    for (const number of a) {
      if(!aFiltered.includes(number))
      aFiltered.push(number)
    }
    return aFiltered
  }
);
// [distinct] using const variable, includes push function Array classes
