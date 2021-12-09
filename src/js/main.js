/* console.log(
  function grid(N=26) {
    return [...Array(N)].map(
      (_,i)=>{
        return Array.from({length:N},(_,j)=>{
          let currentPos = 97 + i
        currentPos+=j
        if(currentPos > 122){
          currentPos -= 122
         return String.fromCharCode(currentPos)
        } else
        return String.fromCharCode(currentPos)
      }).join(" ")}
    ).join('\n')
  }()
); */

// [grid] trying
function sortme(names=["one","two","three"]) {
  return names.sort()
}

// [sortme] using Array sort function