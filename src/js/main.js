console.log(function getDivisorsCnt(n=10){
  const divisors = [1,];
  let i = 2;
  while (i <=n) {
    if(n % i === 0) divisors.push(i)
    i++
  }
  return divisors.length
}()
)

// [getDivisorsCnt] using while push