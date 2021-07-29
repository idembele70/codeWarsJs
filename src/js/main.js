console.log(
  function stringy(size=3) {
    let binaryString =""
  for (let i = 0; i < size; i++) {
   binaryString += i % 2 === 0 ? "1" : "0" 
  }
  return binaryString
  }()
)

