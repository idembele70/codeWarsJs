console.log(function direction(facing="S", turn =540) {
  const directions = {
    "N" : 0, "NE" : 45, "E" : 90, "SE" : 135, "S" : 180, "SW" : 225, "W" : 270, "NW": 315
  }
  const startPosition = directions[facing]
  const positionAfterTurn = startPosition + turn
  if(directions[positionAfterTurn] < 360)
  return Object.keys(directions).find(
    key=>directions[key] === positionAfterTurn
  )
  else {
    if(positionAfterTurn === 360)
    return "N"
    else {
      return positionAfterTurn - positionAfterTurn % 360 || 0
    }
  }
}());
// [duplicateCount] trying