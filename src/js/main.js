function alphabetWar(fight = "z") {
  const leftSide = [0,"s", "b", "p", "w"];
  const rightSide = [0,"z", "d", "q", "m"];
  let leftSideSum = 0,
    rightSideSum = 0;

  fight.split('').map((letter) =>
    leftSide.indexOf(letter) !== -1
      ? (leftSideSum += leftSide.indexOf(letter)) : 
      rightSide.indexOf(letter) !== -1 ?
       (rightSideSum += rightSide.indexOf(letter))
       : ""
  );
  return leftSideSum > rightSideSum
  ? "Left side wins!"
  : leftSideSum === rightSideSum
  ? "Let's fight again!"
  : "Right side wins!";
}

console.log(alphabetWar());

