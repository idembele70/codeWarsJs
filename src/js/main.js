/* const getPositions = (s = 55) => {
  const handsUpTabs = { P1: 0, P2: 0, P3: 0 };
  let step = 0;
  for (let i = 0; i < s; i++) {
    const res = [];
    switch (true) {
      case i % 3 == 0:
        handsUpTabs.P1 = 0;
        break;
      case i % 9 == 0:
        handsUpTabs.P1 = 0;
        handsUpTabs.P2 = 0;
        handsUpTabs.P3++;
        break;
      case i % 3 !== 0:
        handsUpTabs.P1++;
        break;
      case i % 3 !== 0:
        handsUpTabs.P1++;
        break;

      default:
        break;
    }
    for (const part in handsUpTabs) {
      res.push(handsUpTabs[part]);
    }
    console.log("step " + step + " : " + res);
    ++step;
  }
};

getPositions();
 */
function getSum(a=1,b=0) {
  const min = Math.min(a,b)
  const max = Math.max(a,b)
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum+=i
    
  }
  return sum;
}
console.log(getSum());