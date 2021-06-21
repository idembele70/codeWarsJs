const number = (busStops=[[10,0],[3,5],[5,8]]) => {
  
  return busStops.map(x=>x[0]-x[1]).reduce(
    (acc,curr)=>acc+=curr,0) 
}

console.log(number());