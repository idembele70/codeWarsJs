function sc(floor = 4) {
  let voice = "";
  if (floor > 1) {
    for (let i = 0; i < floor; i++) {
      if (floor <= 6) {
        if (i + 1 === floor) {
          voice += 'Pa! Aa!';
        } else if (i + 1 !== floor) {
          voice += 'Aa~ ';
        };
      } else {
        if (floor > 6) {
          if (i + 1 === floor) {
            voice += 'Pa!';
          } else {
            voice += 'Aa~ ';
          }
        };
      }
    }
  } else {
    return "";
  }
  return voice;
}

console.log(sc());