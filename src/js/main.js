console.log(
  function grid(N=14) {
    return [...Array(N)].map(
      (_,i)=>Array.from({length:N},()=>String.fromCharCode(97+i+ 1)).join("\n")
    )
  }()
);
// [grid] trying