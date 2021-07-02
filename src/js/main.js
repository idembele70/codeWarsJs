console.log(
  (function removeEveryOther(arr = ["Hello", "Goodbye", "Hello Again"]) {
    const res = [];
    arr.forEach( (x,i) => (i == 0 || !(i % 2) ? res.push(x) : ''));
    return res;
  })()
);
