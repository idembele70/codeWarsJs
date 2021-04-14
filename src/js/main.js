function rps(p1 = "rock", p2 = 'scissors') {
  switch (p1 + p2) {
    case "scissorspaper":
      return getMsg(1);
    case "paperscissors":
      return getMsg(2);
    case "paperrock":
      return getMsg(1);
    case "rockpaper":
      return getMsg(2);
    case "rockscissors":
      return getMsg(1);
    case "scissorsrock":
      return getMsg(2);

    default: return "Draw!"
  }
}
const getMsg = (n) => `Player ${n} won!`;
console.log(rps(p1 = "paper", p2 = "scissors"));