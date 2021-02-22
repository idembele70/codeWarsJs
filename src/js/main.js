function sc(floor = 4) {
 if (floor <= 1) return ""; let voice = "";
voice = 'Aa~ '.repeat(floor-1) + 'Pa!' ; 
if (floor <= 6) voice += ' Aa!';
return voice;
}

console.log(sc());