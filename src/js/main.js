// complete the function
function accum(s='abcd') {
    const tabs = []; let compteur = -1;
	 s.split('').forEach((element)=>{
         compteur++
        const elementLength = s.indexOf(element,compteur);
        String(str=element.toUpperCase());
        for (let i = 0; i < elementLength; i++) {
        str+=element.toLowerCase();
        }
        
        tabs.push(str);
    });
    return tabs.join('-');
}
//  console.log(accum());




console.log(accum("ZpglnRxqenU"));
// console.log(accum("NyffsGeyylB"));
// console.log(accum("MjtkuBovqrU"));
// console.log(accum("EvidjUnokmM"));
// console.log(accum("HbideVbxncC"));
