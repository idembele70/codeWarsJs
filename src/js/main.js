console.log(
  function name(name = "johN") {
    if (name) {
      name = name.replace(/^[A-Z]|^[a-z]/g, (letter, idx) => idx === 0 ? letter.toUpperCase() : letter.toLowerCase())
    }
    return `Hello, ${name + "!" || "World!"}`
  }()
)
// [name] trying
