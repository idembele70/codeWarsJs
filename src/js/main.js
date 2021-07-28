console.log(
  function sumOfIntegersInString(s="The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") {
    return [...s.split(/[^0-9]/g)].reduce(
      (acc,cur)=>acc+=+cur,0
    )
  }()
)
