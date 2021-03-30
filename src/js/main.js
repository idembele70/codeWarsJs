const monkeyCount = (n=5) =>{
    const tabsMonkey = [];
    for (let i = 1; i <= n; i++) {
        tabsMonkey.push(i);
    }
    return tabsMonkey;
}

console.log(monkeyCount());