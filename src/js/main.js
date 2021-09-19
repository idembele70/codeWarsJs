console.log(
  function billboard(name = "Jeong-Ho Aristotelis", price = "30") {
    return eval(name.length + String.fromCharCode(42) +price || 30)
  }()
);
// [billboard] eval function, with String fromCharCode
