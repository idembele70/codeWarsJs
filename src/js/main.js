console.log(
  (function removeEveryOther(arr = ["Hello", "Goodbye", "Hello Again"]) {
    return arr.filter(
      (x,i)=>(i+1)%2
    )
  })()
);