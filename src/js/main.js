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

function findOdd(A=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) {
  let res ='';
   A.forEach(number => A.join` `.match(number).length == 1 ? res = number : 0);
  return res;
}
console.log(findOdd());