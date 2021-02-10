document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";

// function isValidWalk(walk=['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) {
//     const RemoweVirgule = new RegExp(',','g');
//   let  container = walk.toString();
//     if (walk.length == 10) {
//         for (let i = 0; i < container.length; i++) {
//             if (container.charAt(i).match(RemoweVirgule)) {
//                container =  container.replace(container.charAt(i),'');
//                 container.charAt(i)
//             }
//         }
//     console.log(container);   
//      container = container.replaceAll(',','');
//      console.log(container);
//      const regexNs = new RegExp('ns','g');
//      const regexWe = new RegExp('we','g');
//         if (container.match(regexNs).length == 5 || container.match(regexWe).length == 5) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     } else {
//         console.log(false);
//      }
// }

function isValidWalk(walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) {
    const RemoweVirgule = new RegExp(',', 'g');
    let container = walk.toString();
    if (walk.length == 10) {
        for (let i = 0; i < container.length; i++) {
            if (container.charAt(i).match(RemoweVirgule)) {
                container = container.replace(container.charAt(i), '');
                container.charAt(i)
            }
        }
        const regexNs = new RegExp('ns', 'g');
        const regexWe = new RegExp('we', 'g');
        let nsLength, weLength;
        if (container.match(regexNs)) {
             nsLength = container.match(regexNs).length;
        } else {
             weLength = container.match(regexWe).length;
        }
        if (nsLength == 5 || weLength == 5) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e']));

