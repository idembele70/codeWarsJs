function divisors(integer = 13) {
  const tabs = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) tabs.push(i);
  }
  return tabs.length == 0 ? `${integer} is prime` : tabs;
}

console.log(divisors());
