const betterThanAverage = function (classPoints = [2, 3], yourPoints = 5) {
  let sum = 0, average = 0;
  const numberOfStudents = classPoints.length;
  
    classPoints.forEach(numero => sum += numero);
  average = sum / numberOfStudents;
  return average < yourPoints;
}

console.log(betterThanAverage());