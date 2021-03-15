function sumArray(array=[6, 2, 1, 8, 10]) {
  const max = Math.max(...array);
  const min = Math.min(...array);
 let acc = Number();
 if (array == null || array.length <= 1)return 0 ;
 else for (let i = 0; i < array.length; i++)acc += array[i]; return acc-min-max;
}

console.log(sumArray());

// return array === null || array.length === 0 || array.length === 1 ? 0 : array.reduce((acc,cur)=>acc+=cur,0)-(Math.max(...array))-Math.min(...array);
