_ = (n = 5) => {
  const tabs = [];
  for (let i = 1; i <= n; i++) {
    tabs.unshift(i);
  }
  return tabs;
}

console.log(_());