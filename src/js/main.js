console.log(
  function between(a=1,b=4) {
    return Array(b+1-a).fill(a).map(
      (number,idx)=>number+idx
    )
  }()
);
// [between] using Array & map functions