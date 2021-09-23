console.log(
  function _if(bool = false, func1 = () => console["log"](true), func2 = () => console["log"](false)) {
    return bool ? func1() : func2()
  }()
);
// [_if] using ternary
