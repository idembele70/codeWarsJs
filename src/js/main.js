console.log(
  function _if(bool = false, func1 = () => console["log"](true), func2 = () => console["log"](false)) {
    if (bool) return func1()
    return func2()
  }()
);
// [_if] using if condition
