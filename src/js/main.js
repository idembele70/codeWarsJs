// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";
// document.body.innerHTML = "white";

function filter_list(l=[1,2,'a','b']){
   return l.filter(function (v) {
       return typeof v !== 'string';
   });
  }

  console.log(filter_list());