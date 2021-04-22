const betterThanAverage = function(classPoints=[2, 3], yourPoints=5){
  return classPoints.reduce((acc,curr)=>acc+=curr) / classPoints.length < yourPoints
}

console.log(betterThanAverage());