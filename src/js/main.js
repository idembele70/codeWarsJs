class Map {
  maps(x = [1, 2, 3]) {
    const tabs = [];
     x.forEach(el =>tabs.push(el *= 2));
     return tabs;
  }
}
const map = new Map();
console.log(map.maps());