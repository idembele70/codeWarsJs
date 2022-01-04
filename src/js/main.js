console.log(
  function descenginOrder(n = 1234) {
    return +[...n.toString()].sort(
      (a, b) => b - a
    ).join('')
  }()
);

// [descenginOrder] using toString sort join and + operator to make string number