const number = (busStops=[[10,0],[3,5],[5,8]]) => {
  let PeopleAtTheEnd = 0;
  for (const stop of busStops) {
    PeopleAtTheEnd+=stop[0]-stop[1]
  } 
 return PeopleAtTheEnd
}

console.log(number());