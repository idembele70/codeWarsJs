function multiTable(number = 5) {
  let res = '';
  for (let i = 1; i <= 10; ++i) {
    if (res == '') res += i + ' * ' + number + ' = ' + number * i;
    else res += '\n' + i + ' * ' + number + ' = ' + number * i;
  }
  return res
}
console.log(multiTable());