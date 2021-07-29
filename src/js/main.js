console.log(
  function stringy(size=3) {
    return Array.from({length : size}, (v,i)=>i%2===0 ? 1 : 0).join``
  }()
)

