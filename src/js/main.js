console.log(
  function getCount(str="abracadabra") {
  const matchArr = str.match(/[aeiou]/ig) || []
  return matchArr.length
  }()
)

// [getCount] using match and or assignment and array length