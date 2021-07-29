console.log(
  function stringy(size=3) {
    return [...Array(size)].map(
      (value,idx)=>!(idx%2) ? 1 : 0
      ).join``
  }()
)

//[stringy] Array  function