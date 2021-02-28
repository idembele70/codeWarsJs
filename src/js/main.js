class SmallestIntegerFinder {
    findSmallestInt(args=[78,56,232,12,8]) {
       let med; 
     for (const intr of args) {
         if (Number.isInteger(med)) {
             med = Math.min(med,intr);
         } else {
             med = intr;
         }
     }
     return med;
    }
  }

  var sif = new SmallestIntegerFinder();
  console.log((sif.findSmallestInt()));
  console.log((sif.findSmallestInt([78,56,232,12,18])));
  console.log((sif.findSmallestInt([78,56,232,412,228])));
  console.log((sif.findSmallestInt([78,56,232,12,0])));
  console.log((sif.findSmallestInt([1,56,232,12,8])));