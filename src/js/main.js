console.log(
  function gooseFilter(birds=["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const notGesse = [];
     birds.forEach(
      Onebird=> geese.indexOf(Onebird) === -1 ? notGesse.push(Onebird) : null
    )
    return notGesse
  }()
);

// [gooseFilter] using foreach and indexof push
