function take(arr = [], n = 1) {
  let tabs = []
  console.log(arr)
if(arr == null)return tabs;
else
{
for (let i = 0; i < n; i++) {
  if(arr[i] != undefined)
  tabs.push(arr[i]);
}
return tabs
}
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));