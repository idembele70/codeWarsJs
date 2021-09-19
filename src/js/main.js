console.log(
  function billboard(name = "Jeong-Ho Aristotelis", price = "30") {
    return Array(name.length).fill(1).reduce(
      acc=>acc+price||30,0
    )
  }()
);
// [billboard] using Array and fill
