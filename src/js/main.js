console.log(
  function billboard(name = "Jeong-Ho Aristotelis", price = 30) {
    return Array.from({ length: name.length }, (v) => v = price || 30).reduce((acc, c) => acc + c, 0)
  }()
);
// [billboard] using Array FROM and REDUCE
