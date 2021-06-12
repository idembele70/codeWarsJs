function checkAlive(health) {
  return !(health <= 0 || health >=10)
}

console.log(checkAlive(5));