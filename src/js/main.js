document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";

function isValidWalk(walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) {
 const north  = walk.filter(item => {return item == 'n'}).length;
 const south  = walk.filter(item => {return item == 's'}).length;
 const east  = walk.filter(item => {return item == 'e'}).length;
 const west  = walk.filter(item => {return item == 'w'}).length;

 return walk.length == 10 && north == south && east == west;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
