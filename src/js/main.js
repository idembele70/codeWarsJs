function divisors(integer = 13) {
  const res =  [...Array(integer)].map((x,i)=>x=i).filter((x, i) => {
    if (integer % i == 0 && x!= 1) return (x = i);
  });
  return res.length == 0? integer+" is prime" : res
}

console.log(divisors());
