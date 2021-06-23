function closeCompare(a = 2, b = 5, margin=3) {
  console.log(a, b, margin);
  margin = margin == undefined || margin < 0 ? 0 : margin;
  console.log(margin);
  if (a - b <= margin && margin != 0 || a-b==0 ) return 0;
  else if (a < b) return -1;
  return 1;
}
console.log(closeCompare());
