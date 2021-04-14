function rps(p1 = "rock", p2 = 'scissors') {

  if (p1 + p2 === 'paperscissors') {
    return getMsg(2)
  } else if (p1 + p2 === 'scissorspaper') {
    return getMsg(1)
  } else if (p1 + p2 === 'rockpaper') {
    return getMsg(2)
  }
  else if (p1 + p2 === 'paperrock') {
    return getMsg(1)
  }
  else if (p1 + p2 === 'scissorsrock') {
    return getMsg(2)
  }
  else if (p1 + p2 === 'rockscissors') {
    return getMsg(1)
  } else {
    return 'Draw!'
  }
}

const getMsg = (n) => {
  return (n == 1 || n == 2) ? `Player ${n} won!` : 'Draw'
}

console.log(rps());