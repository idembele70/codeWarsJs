console.log(
  function getDivisorsCnt(n = 10) {
  let compteur = 0;
  for (let i = 1; i < n / 2; i++) {
    n % i == 0 ? compteur++ : null;
  }
  return compteur+=2
}()
);
