document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";
let str = 'a,lu,i,s'
function isValidWalk(walk) {
    const RemoweVirgule = new RegExp(',','g');
  let  container = walk.toString();
    if (walk.length == 10) {
        for (let i = 0; i < container.length; i++) {
            if (container.charAt(i).match(RemoweVirgule)) {
               container =  container.replace(container.charAt(i),'');
                container.charAt(i)
            }
            
        }
        console.log(container);   
     container = container.replaceAll(',','');
     console.log(container);
     const MyRegex = new RegExp('ns','g');
        if (container.match(MyRegex).leng == 5) {
            console.log('ok');
        } else {
            console.log(false);
        }
    } else {
        console.log(false);
     }
}
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);


