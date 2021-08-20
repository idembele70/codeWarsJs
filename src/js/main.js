console.log(
  function name(s="!hi!!") {
    return s.replace(/!*$/,"")
  }()
);
// [name] using regex with *


