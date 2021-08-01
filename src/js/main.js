console.log(
  (function gooseFilter(
    birds = [
      "Mallard",
      "Hook Bill",
      "African",
      "Crested",
      "Pilgrim",
      "Toulouse",
      "Blue Swedish",
    ]
  ) {
    const geese = [
      "African",
      "Roman Tufted",
      "Toulouse",
      "Pilgrim",
      "Steinbacher",
    ];
    const notGeese = [];
    for (const bird of birds) {
      let isNotGeese = true
      for (const key in geese) {
        if (geese[key] == bird ) {
          isNotGeese = false
          break
        }
      }
      if(isNotGeese) notGeese.push(bird)
    }
    return notGeese
  })()
);


