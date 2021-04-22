const betterThanAverage = function (classPoints = [2, 3], yourPoints = 5) {
  let sum = 0, average = 0;
  const numberOfStudents = classPoints.length;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  average = sum / numberOfStudents;
  return average < yourPoints;
}

console.log(betterThanAverage());