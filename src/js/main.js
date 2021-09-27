console.log(
  function name(name = "johN") {
    const ArrayName = []
    if(name)
    for (let i = 0; i < name.length; i++) {
      if(i === 0){
        ArrayName.push(name[i].toUpperCase())
      } else {
        ArrayName.push(name[i].toLowerCase())
      }
    }
    return `Hello, ${ArrayName.join`` || "World"}!`
  }()
)
// [name] using for iteration
