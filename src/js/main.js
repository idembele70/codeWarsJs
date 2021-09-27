console.log(
  function name(name = "johN") {
    if(name){ name + "!"
    name = name.toLowerCase()
    name = name.replace(name.charAt(0), v=>v.toUpperCase())
     }
    return "Hello, " + (name || "World")+"!"
  }()
)
// [name] using regex condition replace
