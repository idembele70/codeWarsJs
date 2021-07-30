function alphabetWar(fight = "z") {
  const leftSide = ["s", "b", "p", "w"];
  const rightSide = ["z", "d", "q", "m"];
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < fight.length; i++) {
    const letter = fight[i];
    if(leftSide.includes(letter))
    leftSum+= leftSide.indexOf(letter) + 1
    if(rightSide.includes(letter))
    rightSum+= rightSide.indexOf(letter) + 1
    else continue
  }
  switch(true){
    case  leftSum > rightSum :
    return "Left side wins!" 
    case  leftSum < rightSum :
    return "Right side wins!"
    default :
    return "Let's fight again!"
  }
}

console.log(alphabetWar());

