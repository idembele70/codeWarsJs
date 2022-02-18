console.log(
  function getCount(str="abracadabra") {
  return str.replace(/[^aeiou]/ig, "").length
  }()
)

// [getCount] using regex replace