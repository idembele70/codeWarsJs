console.log(
  function shortcut(string="codewars") {
    return string.replace(/[aeuio]/g, "")
  }()
);
// [shortcut] using replace and regex