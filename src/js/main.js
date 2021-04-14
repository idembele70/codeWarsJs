function rps(p1 = "rock", p2 = 'scissors') {

  if (p1 + p2 === 'paperscissors') {
    return 'Player 2 won!'
  } else if (p1 + p2 === 'scissorspaper') {
    return 'Player 1 won!'
  } else if (p1 + p2 === 'rockpaper') {
    return 'Player 2 won!'
  }
  else if (p1 + p2 === 'paperrock') {
    return 'Player 1 won!'
  }
  else if (p1 + p2 === 'scissorsrock') {
    return 'Player 2 won!'
  }
  else if (p1 + p2 === 'rockscissors') {
    return 'Player 1 won!'
  } else {
    return 'Draw!'
  }
}

console.log(rps());