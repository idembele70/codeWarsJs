console.log(
  function calculator(a=1,b=2,sign="+") {
  if(typeof a === "string" || typeof b === "string" || !["-","+","*",'/'].includes(sign) )
  return "unknown value"
  else 
  return eval(`${a}${sign}${b}`)  
} ()
);

//  [calculator] usign typeof includes and eval