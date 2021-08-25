console.log(
  function colorOf(r=255,g=0,b=0){
    const red = (r.toString(16).length === 1 ? "0" : "") + r.toString(16)
    const green = (g.toString(16).length === 1 ? "0" :"") + g.toString(16)
    const blue =  (b.toString(16).length === 1 ? "0" :"") + b.toString(16)
    return `#${red}${green}${blue}`
  }()
);
// [colorOf] using toString


