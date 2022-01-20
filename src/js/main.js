console.log(
 function getMiddle(s="teest") {
   let middle = []
   const { length } = s;
   if(length % 2)
  middle = s[(length-1) / 2]
   else
   middle = s[length / 2 - 1] + s[length / 2]
   return middle
 }()
);

// [getMiddle] using destructuring length and return