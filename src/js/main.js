console.log(
  function name(s="!hi!!") {
    return s.replace(/!{1,}$/,"")
  }()
);
// [name] using regex with {1,}


