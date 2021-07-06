function periodIsLate(
  last = new Date(2016, 6, 13),
  today = new Date(2016, 7, 16),
  cycleLength = 35
) {
  const timeTomili = today.getTime() - last.getTime();
  const time = timeTomili / 1000 / 60 / 60 / 24;
  return time > cycleLength
}

console.log(periodIsLate());
