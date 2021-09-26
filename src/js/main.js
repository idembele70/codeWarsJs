console.log(
  function name(name = "johN") {
    if (name) {
      name = name.replace(/[A-Z]/ig, (letter, idx) => idx === 0 ? letter.toUpperCase() : letter.toLowerCase()) + "!"
    }
    return `Hello, ${name + "!" || "World!"}`
  }()
)
// [name] using replace with regex
