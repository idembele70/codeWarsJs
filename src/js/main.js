class Map {
  maps(x=[1, 2, 3]){
 return  x.map(el => el * 2);
  }
}
const map = new Map();
console.log(map.maps()); 