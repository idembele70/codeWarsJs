console.log(
  function gooseFilter(birds=["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(
      bird=>!geese.includes(bird)
    )
  }()
);

// [gooseFilter] using filter and includes
