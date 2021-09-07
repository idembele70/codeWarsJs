const reducer = (array,power) => {
  return array.reduce(
    (acc,cur)=>acc + cur ** power, 0
  )
}

function arrayMadness(a=[4,5,6],b=[1,2,4]) {
  return reducer(a,2) > reducer (b,3)
}

console.log(arrayMadness());

//  [reducer] usign reduce and two function